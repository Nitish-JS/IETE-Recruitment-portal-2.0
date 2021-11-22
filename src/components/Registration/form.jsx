import React, { useState } from 'react'
import Signup from './signup';
import useForm from './useForm'
import { Redirect } from 'react-router'
import validate from './form_validation';
import './form.css'
import axios, { Axios } from 'axios';

const Form = () => {
    const[values,setValues]=useState({
        name: "",
        email:'',
        password:'',
        reg_no:'',
        phone:''
    })
    const[errors,setErrors]=useState({})
    const[submitted,setSubmitted]=useState(false)
    const [redirect,setRedirect]=useState(false);
    const handleChange=e=>{
        console.log("handle change is called");
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();

        setErrors(validate(values));
        
        console.log(values);
        // axios.post("https://recportal-iete.herokuapp.com/auth/register/",{
        //     values
        // }).then((response) =>{
        //     console.log(response);
        // });
        const response= await fetch('https://recportal-iete.herokuapp.com/auth/register/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                values
            )
        }).catch(err => console.log(err));
        const content = await response.json();
        console.log(content);
        setSubmitted(true);
        // setRedirect(true)
    }
       if(redirect){
           return <Redirect to='/otp_login' />
       }
    return (

        <div className='wrapper'>
           <Signup values={values} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>
            
        
        </div>
        
        )
}

export default Form
