import React, { useState } from "react";
import Otp_page from "./Otp_page";
import validate from "./Otp_validation";
import { Redirect } from "react-router-dom";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import Loading from "../Quiz/Loading";

const OTP_Form = () => {
  const [values, setValues] = useState({
    email: localStorage.getItem('email'),
    otp: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [otpError, setOtpError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setOtpError(null);
    setLoading(true);

    setState({ ...state, open: true });

    // setErrors(validate(values));
    // console.log(values);
    const response = await fetch(
      "https://recportal-iete.herokuapp.com/auth/verifyotp/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    const content =  await response.json();
    console.log(response);
    console.log(content);
    if (response.status === 403 ) {
      setLoading(false);
      setOtpError(content.message);
    }
    if(response.status===404){
      setLoading(false);
      setOtpError(content.error);
    }
    if (response.status === 200) {
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
            severity={otpError?"error":"success"}
            sx={{ width: "100%" }}
            variant="filled"
            onClose={handleClose}
          >
            {otpError}
          </Alert>
        </Snackbar>
      )}
      {loading ? (
        <Loading />
      ) : (
        <Otp_page
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          
        />
      )}
    </div>
  );
};

export default OTP_Form;
