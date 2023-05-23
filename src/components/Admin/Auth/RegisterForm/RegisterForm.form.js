import * as yup from "yup";

export const initialValues = () => {
  return {
    firstname: "",
    lastname: "",
    email: "",
    new_password: "",
    confirmPassword: "",
    privacyPolicy: false,
  };
};

export function validationSchema() {
  return yup.object({
    firstname: yup.string().required("El nombre es requerido"),
    lastname: yup.string().required("El apellido es requerido"),
    email: yup
      .string()
      .email("El correo no es valido")
      .required("Campo requerido"),
    new_password: yup
      .string()
      .required("Campo requerido")
      .oneOf([yup.ref("new_password")], "Las contraseñas no coinciden"),
    privacyPolicy: yup.bool.isTrue(true),
  });
}
