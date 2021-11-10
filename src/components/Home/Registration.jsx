import React from 'react'
import Button from '@mui/material/Button';
import {makeStyles} from '@mui/styles';

// const useStyles=makeStyles(theme =>({
//     text:{
//         color: "#14CC7F"

//     }
// })); 
// classes={{text: classes.text}}

function Registration() {
    // const classes=useStyles();
    return (
        <div className='home-registration'>
            <div className='registration-innerdiv'>
            <h2>REGISTER HERE</h2>
            <br />
            <h2>OR</h2>
            <Button className="register-button" variant="outlined" size='large' >Already Registered</Button>
            </div>
        </div>
    )
}

export default Registration
