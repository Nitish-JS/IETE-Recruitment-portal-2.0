import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import Login_form from "./Login_form";
import validate from "./login_form_validation";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
<<<<<<< HEAD
import Loading from "../Quiz/Loading";
import { CircularProgress } from '@mui/material';

=======
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
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

<<<<<<< HEAD
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);
=======

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loginError,setLoginError]=useState(null);

>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
<<<<<<< HEAD

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setState({ ...state, open: true });

    // setErrors(validate(values));
=======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, open: true });

    setErrors(validate(values));
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
    console.log(values);
    const response = await fetch(
      "https://recportal-iete.herokuapp.com/auth/login/",
      {
        method: "POST",
        // credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    const content = await response.json();
    console.log(response);
    console.log(content);
<<<<<<< HEAD
    if (response.status === 200) {
      localStorage.setItem("token", JSON.stringify(content));
    } else if (response.status === 401) {
      setLoading(false);
=======
    if (response.status===200) {
      localStorage.setItem("token", JSON.stringify(content));
    }
    else if(response.status===401)
    {
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
      setLoginError(content.detail);
    }
    localStorage.getItem("token") ? setSubmitted(true) : setSubmitted(false);
  };
<<<<<<< HEAD
  // useEffect(()=>{
  //   handleSubmit();
  // },[]);
  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <div className="wrapper">
      {loginError && (
=======
  if (localStorage.getItem("token")) 
  {return <Redirect to="/" />;}

  return (
    <div className="wrapper">
       {loginError && (
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
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
            {loginError}
          </Alert>
        </Snackbar>
      )}

<<<<<<< HEAD
      {loading ? (
        // <CircularProgress color="secondary" size={100}/>
        <Loading />
      ) : (
        <Login_form
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
=======

      <Login_form
        values={values}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
    </div>
  );
};

export default App_Form;
