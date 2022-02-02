import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Questions from "../../questions.json";
import Loading from "./Loading";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    darkGrey: {
      main: "#303030",
    },
  },
  typography: {
    fontFamily: ["Monument Extended"].join(","),
  },
});

let token = "";

try {
  token = "Bearer " + JSON.parse(localStorage.getItem("token")).jwt;
} catch (error) {
  console.log(error);
}

const NavQuiz = ({ questions }) => {
  const [force, setForce] = useState(true);

  // let question_arr = [];
  // const [questions, setQuestions] = useState(props.questions);

  useEffect(() => {
    // console.log("Use Effect in NavQuiz");
  }, [questions]);

  return questions !== undefined ? (
    <ThemeProvider theme={theme}>
      <Container
        className="container"
        maxWidth="xl"
        sx={{
          height: "100%",
          background: "black",
          width: "100%",
          padding: "2%",
          margin: "2%",
        }}
      >
        <Box className="heading" sx={{ color: "white", padding: "5%" }}>
          <Typography>QUESTIONS:</Typography>
        </Box>

        <Box
          className="quesContainer"
          sx={{
            display: "flex",
            padding: "2%",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {questions.map((ques, key) => {
            if (ques.submitted === true) {
              return (
                <Link
                  key={key + 1}
                  to={`/quiz/ques/${ques.id}`}
                  style={{ margin: "10% 2%" }}
                >
                  <Button
                    color="darkGrey"
                    variant="contained"
                    sx={{ width: "10%", height: "140%", borderRadius: "10px" }}
                    style={{ boxShadow: "5px 5px 10px #009254" }}
                  >
                    <Typography color="white"> {key + 1} </Typography>
                  </Button>
                </Link>
              );
            } else {
              return (
                <Link
                  key={key + 1}
                  to={`/quiz/ques/${ques.id}`}
                  style={{ margin: "15% 2%" }}
                >
                  <Button
                    color="darkGrey"
                    variant="contained"
                    sx={{ width: "10%", height: "180%", borderRadius: "10px" }}
                    style={{ boxShadow: "5px 5px 10px #e53e3e" }}
                  >
                    <Typography color="white"> {key + 1} </Typography>
                  </Button>
                </Link>
              );
            }
          })}
        </Box>
      </Container>
    </ThemeProvider>
  ) : (
    <Loading />
  );
};

export default NavQuiz;
