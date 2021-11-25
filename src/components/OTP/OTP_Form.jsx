import React, { useState } from 'react'
import Otp_page from './Otp_page';
import validate from './Otp_validation';
import {Redirect} from 'react-router-dom';
const OTP_Form = () => {
    const [values,setValues]=useState({
        email:'',
        otp:''
    })
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const [redirect,setRedirect]=useState(false);

    const handleChange=e=>{
        const{name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
        
    }
    const handleSubmit= async (e) =>{
        e.preventDefault();
        setErrors(validate(values));
        setSubmitted(true);
        console.log(values);
        // const response=await fetch("https://recportal-iete.herokuapp.com/auth/verifyotp/",{
        //     method:"POST",
        //     headers: {'Content-Type' : 'application/json'},
        //     body: JSON.stringify(values)
        // }).catch(err => console.log(err));
        // const content= await response.json();
        // console.log(content);
        // setSubmitted(true);
        // setRedirect(true)

    }
    if(redirect){
        return <Redirect to='/login' />
    }
   
    return (

        <div className="wrapper">
           <Otp_page  values={values} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}  />
        </div>
        
        )
}

export default OTP_Form
