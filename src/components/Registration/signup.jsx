import React from "react";
import useForm from "./useForm";
import validate from "./form_validation";
const Signup = (props) => {
  const {values,handleChange,handleSubmit,errors} = props;
  console.log("params", values);

  return (
    // <div class="wrapper">
      <div class="container">
        <div class="col-left">
          <div class="login-form">
            <h2>Register Here</h2>
            <form onSubmit={handleSubmit} >
            <p>
                <span className="input-label">Username</span>
                <input
                  id="name"
                  type="text"
                  placeholder="name"
                  required
                  onChange={handleChange}
                  value={values ? values.name : ""}
                  name="name"
                />
                {/* {errors.name && <p>{errors.name}</p>} */}
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
                <span className="input-label">Registration number</span>
                <input
                  id="reg_no"
                  name="reg_no"
                  type="text"
                  placeholder="Registration number"
                  required
                  onChange={handleChange}
                  value={values ? values.reg_no : ""}
                />
                {/* {errors.password2 && <p>{errors.password2}</p>} */}
              </p>
              <p>
                <span className="input-label">Phone Number</span>
                <input
                  id="phone"
                  name='phone'
                  type="text"
                  placeholder="Number"
                  required
                  onChange={handleChange}
                  value={values ? values.phone : ""}
                />
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

export default Signup;
