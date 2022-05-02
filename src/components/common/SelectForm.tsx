import { ErrorMessage, Field, useField } from "formik";
import { ComponentExtendStyle } from "../../interfaces/interfaces";


export interface IOption {
    name: string,
    value: number
}

interface Props extends ComponentExtendStyle {
    label?: string;
    name: string;
    placeholder?: string;
    options?: IOption[]
    [x: string]: any;
}

export const SelectForm = ({ label, className, ...props }: Props) => {
    const [field] = useField(props);

    return (
        <div>
            <label
                className="block text-sm font-medium text-gray-700 "
                htmlFor={props.id || props.name}
            >
                {label}
            </label>
            <Field
                className={`${className
                    ? className
                    : "sm:flex items-center w-72 text-left space-x-3 px-4 h-10 bg-white ring-1 ring-gray-900/10 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-gray-500 dark:bg-gray-800 dark:ring-0 dark:text-gray-300 dark:highlight-white/5 dark:hover:bg-gray-700"
                    }`}
                as="select"
                {...field}
                {...props}
            >
                <option value={""}> Selecciona </option>
                {props.options?.map(({ name, value }) => (
                    <option key={value} value={value}>{name}</option>
                ))}
            </Field>
            <ErrorMessage
                name={props.name}
                component="span"
                className="block text-sm font-medium text-rose-700 text-right"
            />
        </div>
    );
};
