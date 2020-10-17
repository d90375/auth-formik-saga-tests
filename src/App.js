import React from "react";
import { Route, NavLink } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/auth" activeStyle={{ color: "red" }}>
              auth
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" activeStyle={{ color: "red" }}>
              admin
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Route path="/auth" component={AuthPage} />
        <Route path="/admin" component={AdminPage} />
      </section>
    </div>
  );
}

export default App;
