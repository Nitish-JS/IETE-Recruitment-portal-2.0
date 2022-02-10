import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = (props) => {
 

  const token = localStorage.getItem("token");
  if (token) {
    return <Route path={props.path} component={props.component} />;
  } else {
    // window.alert("Login before taking test");
    // window.location.href='/';
    window.location.replace("/");
    // alert("Login before taking test");
  }
};

export default ProtectedRoute;
