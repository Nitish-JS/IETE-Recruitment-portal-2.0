import React from 'react'

const login_form_validation = (values) => {
    let errors={}
    if(!values.email.trim()){
        errors.email='Email is required'
    }
    else if(!/^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)){
        errors.email="Email address is invalid"
    }
    if(!values.otp){
        errors.password="Password is required"
    }
    else if(values.otp.length!=6){
        errors.password="OTP needs to be 6 digit long"
    }
    return errors;
}

export default login_form_validation
