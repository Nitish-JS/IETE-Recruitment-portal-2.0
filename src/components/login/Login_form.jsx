import React, { useState } from 'react'
import useForm from './useForm'
import validate from './login_form_validation';
const Login_form = (submitForm) => {


    const{handleChange,values,handleSubmit,errors}=useForm(submitForm,validate)
    return (
        <div className='form-content'>
            <form  className="form" onSubmit={handleSubmit}>
                <h1>Login Here</h1>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                    id='email'
                    type='email'
                    name='email'
                    className="form-input"
                    placeholder="Enter your Email"
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
                    id='password'
                    type='password'
                    name='password'
                    className="form-input"
                    placeholder="Enter your Password"
                    onChange={handleChange}
                    value={values.password}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="form-input-btn" type='submit'>Register</button>
                <span className="form-input-login">Login using OTP? <a href='/otp_login'>Click here</a></span>
            </form>
        </div>
    )
}

export default Login_form
