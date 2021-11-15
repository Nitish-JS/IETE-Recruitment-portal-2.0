import { Grid, Paper, TextField } from '@mui/material';
import React from 'react'

const Signup=()=>{
    const paperStyle={padding:"20px", height:"80vh",width:"40vw",margin: "10% 40%"}
    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}>
               <h1 style={{textAlign:'center',color:"white"}}>REGISTER HERE</h1> 
            <TextField label='Username' placeholder="Enter Username" style={{width:"70%"}}/>
            <TextField label='Password' placeholder="Enter password" style={{width:"70%"}}/>
            <TextField label='Retype Password' placeholder="Retype password " style={{width:"70%"}}/>
            <TextField label='Email ID' placeholder="Enter email ID" style={{width:"70%"}}/>

            </Paper>
        
        </Grid>
    )
}
export default Signup;
