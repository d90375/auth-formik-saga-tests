import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createCompany } from "../../../redux/ducks/companies";

const CompanyForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (company) => dispatch(createCompany(company));

  return (
    <div>
      <h3>Company Form</h3>
      <Formik
        initialValues={{
          country: "",
          city: "",
          zip: "",
          address: "",
          company: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          Country:
          <Field name="country" data-id="company-form-country" />
          City: <Field name="city" data-id="company-from-city" />
          Zip: <Field name="zip" data-id="company-from-zip" />
          Address: <Field name="address" data-id="company-from-url" />
          Company: <Field name="company" data-id="company-from-company" />
          <button type="submit">Create Event</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CompanyForm;
