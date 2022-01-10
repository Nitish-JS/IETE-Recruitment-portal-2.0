import React from "react";
import Heading from "./Home/Heading";
import Registraion from "./Home/Registration";
import Carousel_domain from "./Home/carousel";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { withRouter } from "react-router";
<<<<<<< HEAD
import Loading from './Quiz/Loading';
=======
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
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
<<<<<<< HEAD
  
=======
  // localStorage.setItem("token", JSON.stringify(content));
  // localStorage.setItem("isLogin", JSON.stringify(true));
  // localStorage.getItem("token") ? setSubmitted(true) : setSubmitted(false);
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
};
function Home() {
  return (
    <div className="home">
<<<<<<< HEAD
        
=======
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
      <Heading />
      {localStorage.getItem("token")  ? (
        <>
          <Button
<<<<<<< HEAD
            href='/info'
=======
            href="/ready"
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
            className="take-test-button"
            variant="outlined"
            size="large"
            onClick={Auth}
          >
            Take Test
          </Button>
<<<<<<< HEAD
  
=======

>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
          <Carousel_domain />
        </>
      ) : (
        <>
          <Registraion />
          <Carousel_domain />
        </>
      )}
<<<<<<< HEAD
      <loader />
    </div>
    
=======
    </div>
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
  );
}

export default withRouter(Home);
