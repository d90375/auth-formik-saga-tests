import React from "react";
import { CompanyForm } from "../CompanyForm";
import { useSelector } from "react-redux";
import { companiesListSelector } from "../../../redux/ducks/companies";

const CompaniesList = () => {
  const companies = useSelector(companiesListSelector);
  return (
    <div>
      <CompanyForm />
      {companies.length ? null : <h3 data-id="empty-list">Empty list</h3>}
      <ul>
        {companies.map((event) => (
          <li key={event.id} data-id="company-list-item">
            {event.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesList;
