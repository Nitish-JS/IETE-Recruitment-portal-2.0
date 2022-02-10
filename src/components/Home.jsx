import React from "react";
import Heading from "./Home/Heading";
import Registraion from "./Home/Registration";
import Carousel_domain from "./Home/carousel";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { withRouter } from "react-router";
import Loading from './Quiz/Loading';
import Dashboard from "./Home/dashboard";
import "../App.css";
const Auth = () => {
  let token="Bearer "+localStorage.getItem('token');
  const response = fetch(
    "https://recportal-iete.herokuapp.com/auth/user/",
    {
      
      method: "POST",
      // credentials: 'include',
      headers: { "Authorization":token},
    }
  );
  const content = response.json();
  console.log(content);
  
};
function Home() {
  return (
    <div className="home">
        
      <Heading />
      {localStorage.getItem("token")  ? (
        <>
          <Button
            href='/info'
            className="take-test-button"
            variant="outlined"
            size="large"
            onClick={Auth}
          >
            Take Test
          </Button>
          {/* <h3 className="Coming-soon-home">Test Coming Soon</h3> */}
          
          <Dashboard />
          <Carousel_domain />
          

         
        </>
      ) : (
        <>
          <Registraion />
          
          <Carousel_domain />
  

        </>
      )}
      <loader />
    </div>
    
  );
}

export default withRouter(Home);