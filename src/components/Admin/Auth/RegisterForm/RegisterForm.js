import React, { useState } from "react";
import "./RegisterForm.scss";
import { Auth } from "../../../../api";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.form";
import { cat } from "fontawesome";

const authController = new Auth();

export const RegisterForm = (props) => {
  const { openLogin } = props;
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    /**validaciones de error */
    validationSchema: validationSchema(),
    /**Sólo se valida cuando enviemos el formulario  */
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (formvalue) => {
      try {
        setError("");
        await authController.register(formvalue);
        openLogin();
      } catch (error) {
        setError("Error en el servidor");
      }
    },
  });

  return (
    <Form className='register-form' onSubmit={formik.handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          name='firstname'
          label='First name'
          placeholder='First name'
          autoComplete='firstname'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstname}
          error={formik.errors.firstname}
        />
        <Form.Input
          fluid
          name='lastname'
          label='Last name'
          placeholder='Last name'
          autoComplete='lastname'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lastname}
          error={formik.errors.lasttname}
        />
      </Form.Group>
      <Form.Input
        name='email'
        placeholder='Correo electronico'
        autoComplete='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Form.Input
        name='new_password'
        type='password'
        autoComplete='new_password'
        placeholder='Contraseña'
        onChange={formik.handleChange}
        value={formik.values.new_password}
        error={formik.errors.new_password}
      />
      <Form.Input
        name='confirmPassword'
        type='password'
        autoComplete='confirmPassword'
        placeholder='Repetir contraseña'
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        error={formik.errors.confirmPassword}
      />
      <Form.Checkbox
        name=''
        privacyPolicy
        label='He leido y acepto las politicas de privacidad'
        onChange={(_, data) =>
          formik.setFieldValue("privacyPolicy", data.checked)
        }
        checked={formik.values.privacyPolicy}
        error={formik.errors.privacyPolicy}
      />
      <Form.Button
        type='submit'
        primary
        fluid
        content='Registrarse'
        loading={formik.isSubmitting}
      />
      {error && <p className='register-form__error'>{error}</p>}
    </Form>
  );
};
