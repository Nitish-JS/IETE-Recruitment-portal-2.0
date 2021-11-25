
import "./App.css";
import Routing from "./components/Routing";
import QuizRouting from "./components/Quiz/QuizRouting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from './components/drawer';
import {makeStyles} from '@mui/styles';
import { ClassNames } from "@emotion/react";
import About from "./components/About";
import form from "./components/Registration/form";
import App_form from "./components/login/app_form";
import './components/Registration/form.css'
import Form from "./components/Registration/form";
import OTP_Form  from "./components/OTP/OTP_Form";
import ProtectedRoutes from "./components/Quiz/ProtectedRoutes";
import Home from "./components/Home";
const useStyles=makeStyles({

  container:{
    display: "flex",
  }
});



function App() {
  const classes=useStyles();
  return (
    <Router>
      <Switch>
        <Route path="/ready" exact>
          <QuizRouting />
        </Route>
        {/* <ProtectedRoutes path="/ready" exact component={QuizRouting} isLogin={true} /> */}
          
        <Route path="/">
          <Routing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
