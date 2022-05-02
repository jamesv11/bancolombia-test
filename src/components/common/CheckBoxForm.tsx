import { ErrorMessage, useField } from "formik";
import { ComponentExtendStyle } from "../../interfaces/interfaces";

interface Props extends ComponentExtendStyle {
    label?: string;
    name: string;
    type?: "checkbox";
    [x: string]: any;
}

export const CheckBoxForm = ({ label, className, ...props }: Props) => {
    const [field] = useField(props);

    return (
        <div>
            <label
                className="block text-sm font-medium text-gray-700 "
               
            >
                {label}
                <input
                    className={`${className
                            ? className
                            : "sm:flex items-center w-4 text-left h-4 bg-white ring-1 ring-gray-900/10 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-gray-500 dark:bg-gray-800 dark:ring-0 dark:text-gray-300 dark:highlight-white/5 dark:hover:bg-gray-700"
                        }`}
                    {...field}
                    {...props}
                />
            </label>
           
            <ErrorMessage
                name={props.name}
                component="span"
                className="block text-sm font-medium text-rose-700 text-right"
            />
        </div>
    );
};
