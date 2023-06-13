import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import Login_form from "./Login_form";
import validate from "./login_form_validation";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import Loading from "../Quiz/Loading";
import { CircularProgress } from '@mui/material';

const App_Form = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  const [submitted, setSubmitted] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoginError(null);
    setLoading(true);

    setState({ ...state, open: true });
    // console.log(values);
    const response = await fetch(
      "https://recportal-iete.onrender.com/auth/login/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    const content = await response.json();
    // console.log(response);
    // console.log(content);
    if (response.status === 200) {
      localStorage.setItem("token", JSON.stringify(content));
    } else if (response.status === 401) {
      setLoading(false);
      setLoginError(content.detail);
    }
    localStorage.getItem("token") ? setSubmitted(true) : setSubmitted(false);

  };
  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <div className="wrapper">
      {loginError && (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          // key={vertical + horizontal }
          autoHideDuration={5000}
          TransitionComponent={state.Transition}
        >
          <Alert
            severity={loginError?"error":"success"}
            sx={{ width: "100%" }}
            variant="filled"
            onClose={handleClose}
          >
            {loginError}
          </Alert>
        </Snackbar>
      )}

      {loading ? (
        <Loading />
      ) : (
        <Login_form
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          
        />
      )}
    </div>
  );
};

export default App_Form;
