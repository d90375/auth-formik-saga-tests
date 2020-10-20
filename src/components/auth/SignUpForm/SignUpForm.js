import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/ducks/auth";

const SingUpForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }) =>
    dispatch(signUp(email, password));

  return (
    <div>
      <h3>Sign Up</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          email: <Field name="email" type="email" />
          password:
          <Field
            name="password"
            type="password"
            validate={(password) =>
              password && password.length >= 8 ? undefined : "password to short"
            }
          >
            {({ meta, field }) => (
              <div>
                <input type="text" placeholder="Email" {...field} />
                {meta.touched && meta.error && (
                  <div className="error">{meta.error}</div>
                )}
              </div>
            )}
          </Field>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SingUpForm;
