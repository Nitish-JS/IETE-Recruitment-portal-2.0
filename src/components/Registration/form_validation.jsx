import React from 'react'

function form_validation(values) {
    let errors={}
    if(!values.name.trim()){
        errors.name="Username required"
    }

    if(!values.email.trim())
    {
        errors.email="Email required"
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

    // if(!values.password2)
    // {
    //     errors.password2="Confirm your password"
    // }
    // else if(values.password2!==values.password)
    // {
    //     errors.password2="Passwords do not match"
    // }
    return errors;
}
export default form_validation;
