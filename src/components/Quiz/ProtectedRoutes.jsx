import { Alert } from "@mui/material";
import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Route path={props.path} component={props.component} />;
  } else {
    window.location.replace("/");
  }
};

export default ProtectedRoute;
