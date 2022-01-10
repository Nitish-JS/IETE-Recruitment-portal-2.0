import React from "react";

import '../Registration/form.css'
const Otp_page = (props) => {
  const {values,handleChange,handleSubmit,errors} = props;

  return (
    // <div class="wrapper">
      <div class="container">
        <div class="col-left">
          <div class="login-form">
            <h2>Verify Email-ID</h2>
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
                <span className="input-label">OTP</span>
                <input
                  id="otp"
                  name="otp"
                  type="password"
                  placeholder="OTP"
                  required
                  onChange={handleChange}
                  value={values ? values.otp : ""}
                />
                {/* {errors.password && <p>{errors.password}</p>} */}
            </p>
            <p>
                <input class="btn" type="submit" value="Verify" />
              </p>
            </form>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Otp_page;
