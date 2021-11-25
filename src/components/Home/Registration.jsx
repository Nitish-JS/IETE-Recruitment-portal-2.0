import React from 'react'
import Button from '@mui/material/Button';
import {makeStyles} from '@mui/styles';
import { withRouter } from "react-router-dom";

// const useStyles=makeStyles(theme =>({
//     button:{
//         [theme.breakpoints.between('sm', 'md')]: {
//             size: "small"

//     }
// }})); 




function Registration() {
    // const classes=useStyles();
    return (
        <div className='home-registration'>
            <div className='registration-innerdiv'>
            {/* <h2 href='/signup' className='register-here'>REGISTER HERE</h2> */}
            <Button className='register-here' href='/signup' variant='text' size='large' >REGISTER HERE</Button>
            <br />
            <h2>OR</h2>
            <Button href='/login' className="register-button" variant="outlined" size='large'  >Already Registered</Button>
            </div>
        </div>
    )
}

export default Registration
