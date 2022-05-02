import { CustomButton, TextInputForm, FormBase, TitleForm } from "../../components/common";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { Loading } from "../../components/common/Loading";
import { Account, ACCOUNT_TYPE, CreditCard, CREDIT_CARD_OPTION, PreRegister, SERVICE_TYPE, User } from "../../interfaces/interfaces";
import { CheckBoxForm } from "../common/CheckBoxForm";
import { SelectForm } from "../common/SelectForm";
import { v4 as uuidv4 } from 'uuid';
import { insertUserService } from "../../services/user/userService";
import { FormikProps } from "formik";
import { insertPreregisterService } from "../../services/preRegister/preRegisterService";

let schema = Yup.object({
    id: Yup.string()
        .min(7, "Debe tener al menos siete caracteres.")
        .required("Requerido."),
    name: Yup.string()
        .min(3, "Debe tener al menos tres caracteres.")
        .required("Requerido."),
    email: Yup.string().email("Email invalido.").required("Requerido."),
    address: Yup.string().required("Requerido."),
    city: Yup.string().required("Requerido."),
    phone: Yup.string().min(10, "Debe tener 10 caracteres.")
        .required("Requerido."),
    birthDay: Yup.string().required("Requerido."),
    maritalStatus: Yup.string().required("Requerido."),
    terms: Yup.boolean().oneOf([true], "Debe de aceptar los terminos y condiciones.")
});

const SELECT_OPTIONS = [
    {
        name: "Soltero",
        value: 1
    },
    {
        name: "Casado",
        value: 2
    }
]

interface Props {
    idService: number,
}

export const ServiceForm = ({ idService }: Props) => {

    const formikRef = useRef<FormikProps<PreRegister>>(null);

    const [loading, setLoading] = useState(false);

    const [generalErrorState, setGeneralErrorState] = useState<boolean>(false);

    const formContent = (
        <>
            <TitleForm title={(idService === 1) ? "Cuenta virtual" : "Tarjeta de crédito"} />
            <div className="grid grid-cols-2 gap-4">
                <TextInputForm
                    label="Identificacion"
                    name="id"
                    type="number"
                    placeholder="Ingrese su identificacion..."
                />
                <TextInputForm
                    label="Nombre"
                    name="name"
                    type="text"
                    placeholder="Ingrese su nombre..."
                />
                <TextInputForm
                    label="Correo electronico"
                    name="email"
                    type="email"
                    placeholder="Ingrese su correo electrónico..."
                />
                <TextInputForm
                    label="Fecha de nacimiento"
                    name="birthDay"
                    type="text"
                    placeholder="ingrese su fecha de nacimiento..."
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <TextInputForm
                    label="Direccion"
                    name="address"
                    type="text"
                    placeholder="Ingrese su dirección..."
                />
                <TextInputForm
                    label="Ciudad"
                    name="city"
                    type="text"
                    placeholder="Ingrese su ciudad..."
                />
                <TextInputForm
                    label="Telefono"
                    name="phone"
                    type="number"
                    placeholder="Ingrese su telefono..."
                />
                <SelectForm
                    label="Estado civil"
                    name="maritalStatus"
                    options={SELECT_OPTIONS}
                />
                <CheckBoxForm
                    label="Terminos y condiciones"
                    name="terms"
                    type="checkbox"
                />
                {
                    idService === SERVICE_TYPE.creditCard && <SelectForm
                        label="Tipo de tarjeta de crédito"
                        name="creditCardType"
                        options={CREDIT_CARD_OPTION}
                    />
                }
                {
                    idService === SERVICE_TYPE.virtualAccount && <SelectForm
                        label="Tipo de cuenta"
                        name="accountType"
                        options={ACCOUNT_TYPE}
                    />
                }
            </div>

            {generalErrorState && "Ha ocurrido un error con tu registro 😢"}
            <CustomButton
                type="submit"
                content="Registrar"
                className="block mt-4 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-5 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
            />
        </>
    );

    const setTypeService = (idService: number, user: User, values: any) => {
        if (idService === SERVICE_TYPE.virtualAccount) {
            const account: Account = {
                id: uuidv4(),
                type: values.accountType
            }
            user.accounts = [account]
        } else {
            const creditCard: CreditCard = {
                id: uuidv4(),
                name: values.creditCardType,
            }
            user.creditCard = [creditCard]
        }

        return user;
    }

    const onSubmit = async (values: { [key: string]: any }) => {

        setLoading(true);

        const user: User = {
            id: values.id,
            name: values.name,
            email: values.email,
            address: values.address,
            city: values.city,
            phone: values.phone,
            birthDay: values.birthDay,
            maritalStatus: values.maritalStatus,
            terms: values.terms,
            serviceType: idService
        };

        const response = await insertUserService(setTypeService(idService, user, values));

        if (response?.id) {
            setLoading(false);
        }

    };

    const handlePreregister = async () => {


        console.log(formikRef.current?.values)

        setLoading(true);

        const preRegister: PreRegister = {
            id: formikRef.current?.values.id || "",
            name: formikRef.current?.values.name || "",
            email: formikRef.current?.values.email || "",
            address: formikRef.current?.values.address || 1,
            city: formikRef.current?.values.city || "",
            phone: formikRef.current?.values.phone || "",
            birthDay: formikRef.current?.values.birthDay || "",
            maritalStatus: formikRef.current?.values.maritalStatus || 1,
            terms: formikRef.current?.values.terms || false,
        };


        const response = await insertPreregisterService(preRegister);

        if (response?.id) {
            setLoading(false);
        }

    };

    if (idService === SERVICE_TYPE.noService) return null;

    return (
        <>
            {loading && <Loading />}
            <FormBase
                initialValues={{
                    id: "",
                    name: "",
                    email: "",
                    address: "",
                    city: "",
                    phone: "",
                    genderType: "",
                    birthDay: "",
                    maritalStatus: "",
                    terms: false

                }}
                children={formContent}
                onSubmit={onSubmit}
                yupSchema={schema}
                innerRef={formikRef}
                className="flex flex-col gap-2 shadow-md p-4"
            />
            <div >
                {
                    idService !== SERVICE_TYPE.noService && <CustomButton
                        onClick={handlePreregister}
                        type="button"
                        content="Guardar pre-registro"
                        className="block mt-4 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-5 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
                    />
                }
            </div>
        </>
    );
};
