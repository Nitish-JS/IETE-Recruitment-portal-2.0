import React from 'react'
import {Route,Redirect,withRouter} from 'react-router-dom';
import Home from '../Home';
import ReadyPage from '../ReadyPage';
import Routing from '../Routing';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router';
const useStyles=makeStyles({
    container:{
      display: "flex"
    }
  });

const ProtectedRoute = (props) => {
    const history=useHistory();
    const classes=useStyles();
    const token=localStorage.getItem('token');
    if(token)
    {
        return <Route path={props.path} component={props.component} />
    }
    else{
        return ( <Redirect to='/' component={Home} />);
        // return ( <RedirHome />);
        alert("Register yourself or login before taking test");
        return(<div className={classes.container}>
        <Routing />
         <Home />
        </div>
         )
        // history.push('/');
        // return null;
        // return (<Redirect to='/' />)
    }
}

export default withRouter(ProtectedRoute)
