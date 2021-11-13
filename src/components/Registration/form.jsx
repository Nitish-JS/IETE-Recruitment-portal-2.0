import React, { useState } from 'react'
import Signup_form from './signup_form'

import './form.css'
const Form = () => {
    const [submitted,setSubmitted]=useState(false)

    function submitForm()
    {
        setSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
           <Signup_form />
            {/* {!submitted ?
            (<Signup_form submitForm={submitForm}/>): ({FormSuccess}) } */}
        
        </div>
            
        </>
    )
}

export default Form
