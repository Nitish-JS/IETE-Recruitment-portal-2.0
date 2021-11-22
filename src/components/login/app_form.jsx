import React, { useState } from 'react'
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
        setSubmitted(true);
        console.log(values);
        // const response=await fetch("https://recportal-iete.herokuapp.com/auth/login/",{
        //     method:"POST",
        //     credentials: 'include',
        //     headers: {'Content-Type' : 'application/json'},
        //     body: JSON.stringify(values)
        // }).catch(err => console.log(err));
        // const content= await response.json();
        // console.log(content);
        // setSubmitted(true);
    }

   
    return (

        <div className="wrapper">
           <Login_form  values={values} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}  />
        </div>
        
        )
}

export default App_Form
