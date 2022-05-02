import { CustomButton, TextInputForm, FormBase, TitleForm } from "../../components/common";
import * as Yup from "yup";
import { useState } from "react";
import { Loading } from "../../components/common/Loading";
import { Account, ACCOUNT_TYPE, CREDIT_CARD_OPTION, User } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import { CheckBoxForm } from "../common/CheckBoxForm";
import { SelectForm } from "../common/SelectForm";
import { v4 as uuidv4 } from 'uuid';
import { insertAccount } from "../../services/firestoreService";

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
    const navigate = useNavigate();
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
                    idService === 2 && <SelectForm
                        label="Tipo de tarjeta de crédito"
                        name="creditCardType"
                        options={CREDIT_CARD_OPTION}
                    />
                }
                {
                    idService === 1 && <SelectForm
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

    const goToLoginPage = () => {
        navigate("/login", { replace: true });
    };

    const onSubmit = async (values: { [key: string]: any }) => {

        const user: User = {
            id: values.id,
            name: values.name,
            email: values.email,
            address: values.address,
            city: values.city,
            phone: values.phone,
            birthDay: values.birthDay,
            maritalStatus: values.maritalStatus,
            terms: values.terms
        };

        const account: Account = {
            user : user,
            type : values.accountType
        }

        const response = await insertAccount(account);
        console.log(response);
        
        setLoading(true);

    };

    if (idService === 0) return null;

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
                className="flex flex-col gap-2 shadow-md p-4"
            />
        </>
    );
};
