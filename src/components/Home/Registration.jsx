import React from 'react'
import Button from '@mui/material/Button';
import {makeStyles} from '@mui/styles';
import { withRouter } from "react-router-dom";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======

>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
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
<<<<<<< HEAD
            <Link to='/signup' style={{textDecoration:'none'}}>
            <Button className='register-here'  variant='text' size='large' >REGISTER HERE</Button>
            </Link>
            <br />
            <h2>OR</h2>
            <Link to='/login' style={{textDecoration:'none'}}>
            <Button  className="register-button" variant="outlined" size='large'  >Already Registered</Button>
            </Link>
=======
            <Button className='register-here' href='/signup' variant='text' size='large' >REGISTER HERE</Button>
            <br />
            <h2>OR</h2>
            <Button href='/login' className="register-button" variant="outlined" size='large'  >Already Registered</Button>
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
            </div>
        </div>
    )
}

export default Registration
