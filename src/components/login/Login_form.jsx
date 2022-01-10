import React from "react";
import useForm from "./useForm";
import validate from "./login_form_validation";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======

>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
const Login_form = (props) => {
  const { values, handleChange, handleSubmit, errors } = props;
  // console.log("params", values);
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

  return (
    <div class="container">
      <div class="col-left">
        <div class="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <p>
              <span className="input-label">Email</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                required
                onChange={handleChange}
                value={values ? values.email : ""}
              />
<<<<<<< HEAD
              {/* {errors.email && <p>{errors.email}</p>} */}
=======
              {errors.email && <p>{errors.email}</p>}
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
            </p>
            <p>
              <span className="input-label">Password</span>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                onChange={handleChange}
                value={values ? values.password : ""}
              />
<<<<<<< HEAD
              {/* {errors.password && <p>{errors.password}</p>} */}
=======
              {errors.password && <p>{errors.password}</p>}
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
            </p>
            <p>
              <input
                class="btn"
                type="submit"
                value="Login"
                onClick={handleClick({
                  vertical: "top",
                  horizontal: "center",
                })}
              />
            </p>
           

            <span className="register-login">
<<<<<<< HEAD
              Not Registered? <Link to='/signup'>Signup</Link>
=======
              Already Registered? <a href="/login">Login</a>
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_form;
