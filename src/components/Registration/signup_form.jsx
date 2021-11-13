import { Button } from "@mui/material";
import React from "react";
import useForm from "./useForm";
import validate from "./form_validation";
import './form.css'
const Signup_form = (submitForm) => {
  const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate);


  return (
    <div className="form-content">
      <form className="form" onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}>Register Here</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            onChange={handleChange}
            value={values.username}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p>{errors.password}</p>}

        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm your password"
            onChange={handleChange}
            value={values.password2}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type='submit' >Register</button>
        <span className="form-input-login">
          Already Registered? <a href='/login'>Login</a>
        </span>
      </form>
    </div>
  );
};

export default Signup_form;
