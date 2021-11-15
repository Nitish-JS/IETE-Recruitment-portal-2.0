import React from 'react'

const login_form_validation = (values) => {
    let errors={}
    if(!values.email.trim()){
        errors.email='Email is required'
    }
    else if(!/^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)){
        errors.email="Email address is invalid"
    }
    if(!values.password){
        errors.password="Password is required"
    }
    else if(values.password.length<8){
        errors.password="Password needs to be atleast 8 character long"
    }
    return errors;
}

export default login_form_validation
