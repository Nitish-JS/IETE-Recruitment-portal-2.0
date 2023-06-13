import React, { useState, useEffect } from "react";
import { Typography, Button, Box, Container, TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link, withRouter } from "react-router-dom";
import ThankYou from "./ThankYou";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    greenUsed: {
      main: "#009254",
    },
    blackOptions: {
      main: "#4D4D4D",
    },
    whiteUsed: {
      main: "#ffffff",
    },
    finishButton: {
      main: "#22424D",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Monument Extended"].join(","),
  },
});

let token;

try {
  token = "Bearer " + JSON.parse(localStorage.getItem("token")).jwt;
} catch (error) {
  console.log(error);
}

const EndQuiz = ({ questions, handleClose }) => {
  console.log("INSIDE ENDQUIZ");
  console.log(questions);

  let ans = 0;
  let not_ans = 0;

  let arr = [];

  useEffect(() => {
    console.log("Use Effect in NavQuiz");
  }, [questions]);

  questions.forEach((ques) => {
    if (ques.submitted == true) ans++;
    else not_ans++;
  });

  return (
    <ThemeProvider
      theme={theme}
      sx={{ width: "100%", backgroundColor: "black" }}
    >
      <Container sx={{ width: "100%", backgroundColor: "black" }}>
        <Typography
          variant="h3"
          fontFamily="Monument Extended"
          sx={{ textAlign: "center", color: "white", marginTop: "15%" }}
        >
          THANK YOU FOR YOUR RESPONSE
        </Typography>

        <Typography
          variant="h4"
          fontFamily="Poppins"
          sx={{
            textAlign: "center",
            color: "#009254",
            marginTop: "2%",
            marginBottom: "15%",
          }}
        >
          Are you sure you want to submit?
        </Typography>

        {/* <Box
          sx={{
            display: "inline",
            marginTop: "20%",
            backgroundColor: "#4D4D4D",
            boxShadow: "5px 5px 5px #009254",
            padding: "1.5%",
            margin: "5%",
            color: "white",
            borderRadius: "10px",
          }}
        >
          {ans}
        </Box>

        <Typography
          variant="h5"
          fontFamily="Poppins"
          sx={{
            textAlign: "center",
            color: "white",
            marginTop: "2%",
            display: "inline",
            margin: "2%",
            marginRight: "5%",
          }}
        >
          No of questions attempted
        </Typography>

        <Box
          sx={{
            display: "inline",
            marginTop: "20%",
            backgroundColor: "#4D4D4D",
            boxShadow: "5px 5px 5px red",
            padding: "1.5%",
            margin: "5%",
            color: "white",
            borderRadius: "10px",
          }}
        >
          {not_ans}
        </Box>

        <Typography
          variant="h5"
          fontFamily="Poppins"
          sx={{
            textAlign: "center",
            color: "white",
            marginTop: "2%",
            display: "inline",
          }}
        >
          No of questions not attempted
        </Typography> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div style={{ width: "50%" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#22424D",
                width: "50%",
                padding: "5%",
                marginTop: "15%",
                marginLeft: "25%",
                borderRadius: "10px",
              }}
              onClick={() => {
                handleClose();
              }}
            >
              <Typography
                fontFamily="Monument Extended"
                sx={{ fontSize: "150%", letterSpacing: "7px" }}
              >
                BACK
              </Typography>
            </Button>
          </div>

          <div style={{ width: "50%" }}>
            <Link to={`/thankyou`} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#22424D",
                  width: "50%",
                  padding: "5%",
                  marginLeft: "25%",
                  marginTop: "15%",
                  borderRadius: "10px",
                }}
                onClick={fetch(
                  "https://recportal-iete.onrender.com/auth/testsubmit/",
                  {
                    method: "POST",
                    headers: {
                      Authorization: token,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      domain: localStorage.getItem("domain"),
                    }),
                  }
                )}
              >
                <Typography
                  fontFamily="Monument Extended"
                  sx={{ fontSize: "150%", letterSpacing: "7px" }}
                >
                  {" "}
                  FINISH{" "}
                </Typography>
              </Button>
            </Link>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EndQuiz;
