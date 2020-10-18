import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createCompany } from "../../redux/ducks/companies";

const CompaniesForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => dispatch(createCompany(event));

  return (
    <div>
      <h3>Company Form</h3>
      <Formik
        initialValues={{
          country: "",
          city: "",
          zip: null,
          address: "",
          company: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          Country:
          <Field name="country" />
          City: <Field name="city" />
          Zip: <Field name="title" />
          Address: <Field name="url" />
          Company: <Field name="url" />
          <button type="submit">Create Event</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CompaniesForm;
