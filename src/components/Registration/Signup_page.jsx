import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import {Button} from '@mui/material'
const initalValues={
    username:'',
    email:'',
    password:'',
    password2:''
};

function Form(){
    const[formValues,setformValues]=useState(initalValues);

    const handleChange=(e) =>{
        const{name,value}=e.target;
        setformValues({
            ...formValues,[name]:value,
        });
    };
    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(formValues);
    }

    return(
        <div className="form">

        
        <div className='register-form' > 
        <h1 className="sign-up-title">Register Here</h1>
        <form onSubmit={handleSubmit}>
            <Grid container alignItem='center' justify='center' direction='column'>
                <Grid item className="signup-field">
                    <TextField
                    id='username'
                    name='username'
                    label="Username"
                    type='text'
                    value={formValues.username}
                    onChange={handleChange}
                    variant="filled"
                    
                    />
                </Grid>
                <Grid item className="signup-field">
                    <TextField
                    id='email'
                    name='email'
                    label="Email ID"
                    type='email'
                    value={formValues.email}
                    onChange={handleChange}
                    
                    />
                </Grid>
                <Grid item className="signup-field">
                    <TextField
                    id='password'
                    name='password'
                    label="Password"
                    type='password'
                    value={formValues.password}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item className="signup-field">
                    <TextField
                    id='password2'
                    name='password2'
                    label="Confirm Password"
                    type='password'
                    value={formValues.password2}
                    onChange={handleChange}
                    />
                </Grid>
                <Button variant="contained" color="primary" type="submit" className='signup-submit'>
          Submit
        </Button>
            </Grid>
        </form>
        </div>
        </div>
    )
}
export default Form;