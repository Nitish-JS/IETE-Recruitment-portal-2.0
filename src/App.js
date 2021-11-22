
import "./App.css";
import Routing from "./components/Routing";
import ReadyPage from "./components/ReadyPage";
import QuizRouting from "./components/Quiz/QuizRouting";
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
    <Router>
      <Switch>
        <Route path="/ready" exact>
          <QuizRouting />
        </Route>
        <Route path="/">
          <Routing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
