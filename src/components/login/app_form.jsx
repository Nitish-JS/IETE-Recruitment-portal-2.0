import React, { useState,useEffect } from 'react'
import { Redirect } from 'react-router'
import Login_form from './Login_form'
import validate from './login_form_validation'
const App_Form = () => {
    const [values,setValues]=useState({
        email:'',
        password:''
    })
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
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
        console.log(values);
        const response=await fetch("https://recportal-iete.herokuapp.com/auth/login/",{
            method:"POST",
            // credentials: 'include',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(values)
        })
        const content= await response.json();
        console.log(content);
        localStorage.setItem('token',JSON.stringify(content));
        localStorage.setItem('isLogin',JSON.stringify(true));
        (localStorage.getItem('token') ? setSubmitted(true): setSubmitted(false))
        // localStorage.setItem('loggedin',JSON.stringify({
        //     login:true,
        //     token:content
        // }))
    }
    if (localStorage.getItem('isLogin'))
        return (<Redirect to='/' />);

    
    return (
        <div className="wrapper">
           <Login_form  values={values} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}  />
        </div>
        )
}

export default App_Form
