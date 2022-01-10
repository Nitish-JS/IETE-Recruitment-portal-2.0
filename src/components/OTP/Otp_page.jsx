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
<<<<<<< HEAD
            <p>OTP sent to your email-id.Check in spam if you didnt recieve </p>
=======
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
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
<<<<<<< HEAD
                {/* {errors.email && <p>{errors.email}</p>} */}
=======
                {errors.email && <p>{errors.email}</p>}
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
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
<<<<<<< HEAD
                {/* {errors.password && <p>{errors.password}</p>} */}
=======
                {errors.password && <p>{errors.password}</p>}
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
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
