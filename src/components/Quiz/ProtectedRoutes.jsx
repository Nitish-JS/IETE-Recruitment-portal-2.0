import React, { useEffect } from 'react'
import {Route,Redirect,withRouter} from 'react-router-dom';
import Home from '../Home';
import ReadyPage from '../ReadyPage';
import Routing from '../Routing';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
const useStyles=makeStyles({
    container:{
      display: "flex"
    }
  });

// const ProtectedRoute = ({children,...rest}) => {
const ProtectedRoute = (props) => {
  
  // const token=localStorage.getItem('token')
  // return(
  //   <Route render={() =>token? (props.component):(<Redirect to={'/'} />) } />
  // )
    
    const classes=useStyles();
    const token=localStorage.getItem('token');
    if(token)
    {
        return <Route path={props.path} component={props.component} />
    }
    else{

        // return ( <Redirect to='/' component={Home} />);
        // return ( <RedirHome />);
        // alert("Register or login before taking the quiz")
        window.location.replace('/');

        //  <Alert>Register or login before taking the quiz</Alert>
        // return(<div className={classes.container}>
        // <Routing />
        //  <Home />
        // </div>
        //  )
        // history.push('/');
        // return null;
        // return (<Redirect to='/' />)
    }



}

export default ProtectedRoute
