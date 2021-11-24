import React from "react";
import useForm from "./useForm";
import validate from "./login_form_validation";
const Login_form = (props) => {
  const {values,handleChange,handleSubmit,errors} = props;
  // console.log("params", values);

  return (
    // <div class="wrapper">
      <div class="container">
        <div class="col-left">
          <div class="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
            <p>
                <span className="input-label">Email</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  required
                  onChange={handleChange}
                  value={values? values.email: ""}
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
                <input class="btn" type="submit" value="Sign In" />
              </p>
              <span className="register-login">
                Already Registered? <a href="/login">Login</a>
              </span>
            </form>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Login_form;
