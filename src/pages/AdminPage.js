import React from "react";
import { NavLink, Route } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin</h1>
      <NavLink to="/admin/new-event">Add Event</NavLink>
      <Route path="/admin/new-event" />
    </div>
  );
};

export default AdminPage;
