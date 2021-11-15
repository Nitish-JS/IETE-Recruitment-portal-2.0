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
import Login_form from "./components/login/Login_form";
import './components/Registration/form.css'
const useStyles=makeStyles({
  container:{
    display: "flex"
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
      <Route path="/about" component={About} />
      <Route path="/Takequiz" component={Todo}/>
      {/* <Route path='/signup' component={Signup} /> */}
      <Route path='/signup' component={form} />
      <Route path='/login' component={Login_form} />
      {/* <Route path='/signup' component={Form} /> */}
    </Switch>
  </Router>
  </div>
  );
}

export default App;
