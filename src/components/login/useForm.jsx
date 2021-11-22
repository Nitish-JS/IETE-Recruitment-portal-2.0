import React, { useState ,useEffect} from 'react'

const useForm = (callback,validate) => {
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
    const handleSubmit=e=>{
        e.preventDefault();
        setErrors(validate(values));
        setSubmitted(true);
        console.log(values);
    }

    return {handleChange,values,handleSubmit,errors}
}


export default useForm;
