import { Formik, Form, FormikHelpers } from "formik";
import {
  AnyObject,
  ObjectShape,
  OptionalObjectSchema,
  TypeOfShape,
} from "yup/lib/object";
import { ComponentExtendStyle } from "../../interfaces/interfaces";

interface Props extends ComponentExtendStyle {
  children: JSX.Element | JSX.Element[];
  initialValues: { [key: string]: any };
  yupSchema: OptionalObjectSchema<
    ObjectShape,
    AnyObject,
    TypeOfShape<ObjectShape>
  >;
  onSubmit: ((
    values: { [key: string]: any },
    formikHelpers: FormikHelpers<{ [key: string]: any }>
  ) => void | Promise<any>) &
    Function;
  sucess?: boolean;
}

export const FormBase = ({
  onSubmit,
  yupSchema,
  children,
  initialValues,
  className,
  sucess,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={yupSchema}
    >
      {(formik) => (
        <Form className={className} noValidate>
          {children}
        </Form>
      )}
    </Formik>
  );
};
