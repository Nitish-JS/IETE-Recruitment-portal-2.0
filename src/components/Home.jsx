import React from "react";
import Heading from "./Home/Heading";
import Registraion from "./Home/Registration";
import Carousel_domain from "./Home/carousel";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { withRouter } from "react-router";
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
  // localStorage.setItem("token", JSON.stringify(content));
  // localStorage.setItem("isLogin", JSON.stringify(true));
  // localStorage.getItem("token") ? setSubmitted(true) : setSubmitted(false);
};
function Home() {
  return (
    <div className="home">
      <Heading />
      {localStorage.getItem("token") && localStorage.getItem("isLogin") ? (
        <>
          <Button
            href="/ready"
            className="take-test-button"
            variant="outlined"
            size="large"
            onClick={Auth}
          >
            Take Test
          </Button>

          <Carousel_domain />
        </>
      ) : (
        <>
          <Registraion />
          <Carousel_domain />
        </>
      )}
    </div>
  );
}

export default withRouter(Home);
