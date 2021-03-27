import React from "react";
import { getCurrentUser } from "../../services/authUser";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!getCurrentUser()||getCurrentUser()["isAdmin"]===false) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default AdminRoute;
