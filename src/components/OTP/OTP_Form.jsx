import React, { useState } from "react";
import Otp_page from "./Otp_page";
import validate from "./Otp_validation";
import { Redirect } from "react-router-dom";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
<<<<<<< HEAD
import Loading from "../Quiz/Loading";

const OTP_Form = () => {
  const [values, setValues] = useState({
    email: localStorage.getItem('email'),
=======

const OTP_Form = () => {
  const [values, setValues] = useState({
    email: "",
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
    otp: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [otpError, setOtpError] = useState(null);
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
=======
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setLoading(true);

    setState({ ...state, open: true });

    // setErrors(validate(values));
=======
    setState({ ...state, open: true });

    setErrors(validate(values));
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
    // console.log(values);
    const response = await fetch(
      "https://recportal-iete.herokuapp.com/auth/verifyotp/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    const content = await response.json();
    console.log(content);
    if (content.status === 403) {
<<<<<<< HEAD
      setLoading(false);
=======
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
      setOtpError(content.message);
    }
    if (content.status === 200) {
      setSubmitted(true);
    }
  };
  if (submitted) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="wrapper">
      {otpError && (
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
            {otpError}
          </Alert>
        </Snackbar>
      )}
<<<<<<< HEAD
      {loading ? (
        <Loading />
      ) : (
        <Otp_page
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
=======
      <Otp_page
        values={values}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
    </div>
  );
};

export default OTP_Form;
