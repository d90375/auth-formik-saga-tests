import React from "react";
import { NavLink, Route } from "react-router-dom";
import { useAuthorized } from "../redux/ducks/auth";
import { CompaniesList } from "../components/companies/CompaniesList";

const AdminPage = () => {
  const isAuthorized = useAuthorized();

  if (!isAuthorized) {
    return <h1>Not authorized</h1>;
  }
  return (
    <div>
      <h1>Admin</h1>
      <NavLink to="/admin/new-company">Add Company</NavLink>
      <Route path="/admin/new-company" component={CompaniesList} />
    </div>
  );
};

export default AdminPage;
