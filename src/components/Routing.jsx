import React from "react";
import Home from "./Home";
// import Info from "./Info";
import QA from "./FAQ/QA";
import Domain_page from "./domains/Domain_page";
import Todo from "./Todo";
import Wait from "./Wait";
import Form from "./Registration/form";
// import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from "./drawer";
import App_Form from "./login/app_form";
import OTP_Form from "./OTP/OTP_Form";
const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const Routing = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        {/* <Navbar /> */}
        <Drawer />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/home" exact component={Home} /> */}
            
        
          <Route path="/signup" exact component={Form} />
          <Route path="/info" component={Domain_page} />
          <Route path="/qa" exact component={QA} />
      
          <Route path="/todo" component={Todo} />

          <Route path="/wait" component={Wait} />
          <Route path="/login" component={App_Form} />
          <Route path="/otp_login" component={OTP_Form} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
