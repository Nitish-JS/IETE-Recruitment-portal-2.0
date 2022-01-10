import React from "react";
import useForm from "./useForm";
import validate from "./login_form_validation";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
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
              {/* {errors.email && <p>{errors.email}</p>} */}
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
              {/* {errors.password && <p>{errors.password}</p>} */}
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
              Not Registered? <Link to='/signup'>Signup</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_form;
