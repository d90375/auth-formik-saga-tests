import React from "react";
import { useDispatch } from "react-redux";
import { createCompany } from "../../../redux/ducks/companies";
import { useFormik } from "formik";

const forms = ["country", "city", "zip", "address", "company"];

const validate = (values) => {
  const errors = {};

  if (!values.country) {
    errors.country = "Required";
  } else if (values.country.length > 2) {
    errors.country = "Must be 2 characters or less";
  }

  if (!values.city) {
    errors.city = "Required";
  } else if (values.city.length > 2) {
    errors.city = "Must be 2 characters or less";
  }

  if (!values.zip) {
    errors.zip = "Required";
  } else if (/^\d{5}$|^\d{5}-\d{4}$/.test(values.zip)) {
    errors.zip = "Invalid email address";
  }

  if (!values.address) {
    errors.address = "Required";
  } else if (values.city.address > 2) {
    errors.address = "Must be 2 characters or less";
  }

  if (!values.company) {
    errors.company = "Required";
  } else if (values.city.company > 2) {
    errors.company = "Must be 2 characters or less";
  }

  return errors;
};

const CompanyForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      country: "",
      city: "",
      zip: "",
      address: "",
      company: "",
    },
    validate,
    onSubmit: (company) => {
      dispatch(createCompany(company));
    },
  });

  return (
    <div>
      <h3>Company Form</h3>
      <form onSubmit={formik.handleSubmit}>
        {forms.map((form) => {
          return (
            <>
              <label htmlFor={form}>
                {form.charAt(0).toUpperCase() + form.slice(1)}:{" "}
              </label>
              <input
                id={form}
                name={form}
                type="text"
                data-id={`company-form-${form}`}
                onChange={formik.handleChange}
                value={formik.values[form]}
              />
              {formik.errors[form] ? <div>{formik.errors[form]}</div> : null}
            </>
          );
        })}
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CompanyForm;
