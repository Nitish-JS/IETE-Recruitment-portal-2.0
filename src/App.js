
import "./App.css";
import Home from "./components/Home";
import Info from "./components/Shop";
import QA from "./components/QA";
import Todo from "./components/Todo";
import Wait from "./components/Wait";
import Shop from './components/Shop'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from './components/drawer';
import {makeStyles} from '@mui/styles';
import { ClassNames } from "@emotion/react";
import About from "./components/About";
// import Form from './components/Registration/Signup_page';
import form from "./components/Registration/form";
import App_form from "./components/login/app_form";
import './components/Registration/form.css'
import Res_home from "./components/responsive_home";
import Form from "./components/Registration/form";
import OTP_Form  from "./components/OTP/OTP_Form";

const useStyles=makeStyles({

  container:{
    display: "flex",
  }
});



function App() {
  const classes=useStyles();
  return (
    <div className={classes.container}>
    <Router>
    <Drawer />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/info" component={About} />
      <Route path="/Takequiz" component={Todo}/>
      {/* <Route path='/signup' component={Signup} /> */}
      <Route path='/signin' component={form} />
      <Route path='/login' component={App_form} />
      <Route path='/signup' component={Form} />
      {/* <Route path='/signup' component={Form} /> */}
      {/* <Route path='/res' component={Res_home} /> */}
      {/* <Route path?re???s' component={OTP_} /> */}
      <Route path='/otp_login' component={OTP_Form} />
    </Switch>
  </Router>
  </div>
  );
}

export default App;
