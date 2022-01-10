import { useState,useEffect } from "react";
import { Redirect } from "react-router";
const useForm = (callback,validate) => {
    
    const[values,setValues]=useState({
        name: "",
        email:'',
        password:'',
        reg_no:'',
        phone:''
    })
    console.log("values", values);
    const[errors,setErrors]=useState({})
    const[submitted,setSubmitted]=useState(false)
    const [redirect,setRedirect]=useState(false);
    const handleChange=e=>{
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();

<<<<<<< HEAD
=======
        setErrors(validate(values));
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
        
        console.log(values);
        const response= await fetch('https://recportal-iete.herokuapp.com/auth/register/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                values
            )
        }).catch(err => console.log(err));
        const content = await response.json();
        console.log(content);
<<<<<<< HEAD
    
=======
        setSubmitted(true);
        if(content.status===404)
        {
              localStorage.setItem('email-error',content.message);
        }
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
        // setRedirect(true)
    }
       if(redirect){
           return <Redirect to='/otp_login' />
       }

    

    return {handleChange,values,handleSubmit,errors};
   
}

export default useForm
