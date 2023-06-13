import React, { useState } from "react";
import Signup from "./signup";
import { Redirect } from "react-router";
import validate from "./form_validation";
import "./form.css";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import Loading from "../Quiz/Loading";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    reg_no: "",
    phone: "",
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

  const [errors, setErrors] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // console.log("handle change is called");
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    setLoading(true);

    setState({ ...state, open: true });

    const response = await fetch(
      "https://recportal-iete.onrender.com/auth/register/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    )
    const content =await  response.json();
    // console.log(content);
    // console.log(response)
    // console.log(response.status);
    if (response.status === 404) {
      setLoading(false);
      setErrors(content.message);
    } else if (response.status === 403) {
      setLoading(false);
      setErrors(content.errors);
    } else if (response.status === 200) {
      setErrors(null);
      localStorage.setItem('email',values.email)
      setSubmitted(true);
    }
  };
  if (submitted) {
    return <Redirect to="/otp_login" />;
  }
  return (
    <div className="wrapper">
      
      {( errors ) && (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          autoHideDuration={5000}
          key={vertical + horizontal}
        >
          <Alert
          
            severity={errors?"error":"success"}
            sx={{ width: "100%" }}
            variant="filled"
            onClose={handleClose}
          >
            {errors}
          </Alert>
        </Snackbar>
      )}

      {loading ? (
        <Loading />
      ) : (
        <Signup
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default Form;
