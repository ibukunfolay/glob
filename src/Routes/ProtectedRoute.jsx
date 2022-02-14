import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated() === true || user) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
