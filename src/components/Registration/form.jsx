import React, { useState } from "react";
import Signup from "./signup";
import { Redirect } from "react-router";
import validate from "./form_validation";
import "./form.css";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";


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

  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState(null);
  const [existError, setExistError] = useState(null);
  const [regError, setRegError] = useState(null);
  const [phoneError, setphoneError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
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
    setState({ ...state, open: true });
    setErrors(validate(values));

    const response = await fetch(
      "https://recportal-iete.herokuapp.com/auth/register/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    ).catch((err) => console.log(err));
    const content = await response.json();
    console.log(content);
    if (content.status === 404) {
      setEmailError(content.message);
      setphoneError(null);
      setExistError(null);
      setRegError(null);
    } else if (content.status === 403) {
      setEmailError(null);
      setphoneError(content.errors.phone);
      setExistError(content.errors.email);
      setRegError(content.errors.reg_no);
    }
    else if(content.status===200){
      setSubmitted(true)
    }

  };
  if (submitted) {

    return <Redirect to="/otp_login" />;
  }
  return (
    <div className="wrapper">
      {/* {emailError && (
        <Alert
          severity="error"
          style={{ backgroundColor: "red" }}
          variant="filled"
        >
          {emailError}
        </Alert>
      )} */}
      {emailError && (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          // key={vertical + horizontal }
          autoHideDuration={5000}
          TransitionComponent={state.Transition}
        >
          <Alert
            severity="error"
            sx={{ width: "100%" }}
            variant="filled"
            onClose={handleClose}
          >
            {emailError}
          </Alert>
        </Snackbar>
      )}
      {(phoneError || existError || regError) && (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          autoHideDuration={5000}
          key={vertical + horizontal}
        >

          <Alert
            severity="error"
            sx={{ width: "100%" }}
            variant="filled"
            onClose={handleClose}
          >
            {existError }
            {existError && <br />}
            {existError && <br />}
            {/* <br /> */}
            {regError}
            {regError && <br />}
            {regError && <br />}

            {phoneError && "Phone number should not contain more than 12 digits"}
          </Alert>
        </Snackbar>
      )}
      
      <Signup
        values={values}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
    </div>
  );
};

export default Form;
