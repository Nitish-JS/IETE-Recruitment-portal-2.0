import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import question_json from "../../questions.json";
import { Typography, Button, Box, Container, TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link, Redirect } from "react-router-dom";
import Loading from "./Loading";
import NavQuiz from "./NavQuiz";

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
  },
  typography: {
    fontFamily: ["Poppins", "Monument Extended"].join(","),
  },
});

let token = "";

const Question = (props) => {
  const { ques_id } = useParams();
  const [questions, setQuestions] = useState(
    JSON.parse(JSON.stringify(props.questions))
  );

  const [force, setForce] = useState(true);

  useEffect(() => {
    setForce(!force);
  }, [ques_id]);

  let ques = {};
  let nextQues = {};
  let prevQues = {};
  let present_index = 0;
  let ans = 0;
  let not_ans = questions.length;

  for (let i = 0; i < questions.length; i++) {
    let q = questions[i];
    if (q.id == ques_id) {
      ques = q;
      present_index = i;
      if (questions.length - 1 !== i) nextQues = questions[i + 1];
      if (i !== 0) prevQues = questions[i - 1];
    }
  }

  if (ques.ques_type === 0) {
    if (ques.selected === undefined) {
      ques.selected = "blank";
    }
  } else {
    if (ques.answer === undefined) {
      ques.answer = "";
    }
  }

  ques.submitted = false;

  var OptCol = "blackOptions";
  var greenOption = -1;
  if (ques.ques_type === 0) {
    if (ques.selected === ques.options[0].option) {
      greenOption = 0;
    } else if (ques.selected === ques.options[1].option) {
      greenOption = 1;
    } else if (ques.selected === ques.options[2].option) {
      greenOption = 2;
    } else if (ques.selected === ques.options[3].option) {
      greenOption = 3;
    }
  }

  let index = 0;
  for (var i = 0; i < questions.length; i++)
    if (questions[i].id == ques_id) index = i;

  const handleChangeLQ = (e) => {
    ques.answer = document.getElementById("longAnswer").value;
    document.getElementById("longAnswer").value = ques.answer;
  };

  return ques.ques_type == 0 ? (
    <ThemeProvider theme={theme}>
      <Container sx={{ width: "70%" }}>
        <div style={{ background: "black" }}>
          <Typography
            fontFamily="Monument Extended"
            sx={{
              color: "white",
              textAlign: "center",
              padding: "10% 0% 5% 0%",
              fontSize: "150%",
            }}
          >
            TEST YOUR KNOWLEDGE
          </Typography>

          <Typography
            variant="h5"
            fontFamily="Monument extended"
            color="white"
            sx={{ padding: "0% 2% 5% 2%" }}
          >
            {" "}
            Section 1
          </Typography>

          <Typography
            fontFamily="Poppins"
            variant="h5"
            color="#009254"
            sx={{ display: "inline", margin: "5% 2%", padding: "2% 2%" }}
          >
            Question: {index + 1} &nbsp;
          </Typography>

          <Typography
            fontFamily="Poppins"
            variant="h5"
            sx={{ display: "inline", margin: "2% 0%", color: "white" }}
          >
            {ques.ques_main}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: "5% 0%",
            }}
          >
            {greenOption === 0
              ? (OptCol = "greenUsed")
              : (OptCol = "blackOptions")}
            <Button
              variant="contained"
              color={OptCol}
              sx={{
                padding: "1% 4%",
                margin: "5% 8%",
                borderRadius: "10px",
                color: "white",
                width: "50%",
                borderColor: "green",
              }}
              style={{ boxShadow: "5px 5px 10px #009254" }}
              onClick={() => {
                greenOption = 0;
                ques.selected = ques.options[0].option;
                setForce(!force);
              }}
            >
              {ques.options[0].option}
            </Button>

            {greenOption === 1
              ? (OptCol = "greenUsed")
              : (OptCol = "blackOptions")}
            <Button
              variant="contained"
              color={OptCol}
              sx={{
                padding: "1% 4%",
                margin: "5% 8%",
                borderRadius: "10px",
                color: "white",
                width: "50%",
              }}
              style={{ boxShadow: "5px 5px 10px #009254" }}
              onClick={() => {
                greenOption = 1;
                ques.selected = ques.options[1].option;
                setForce(!force);
              }}
            >
              {ques.options[1].option}
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            {greenOption === 2
              ? (OptCol = "greenUsed")
              : (OptCol = "blackOptions")}
            <Button
              variant="contained"
              color={OptCol}
              sx={{
                padding: "1% 4%",
                margin: "5% 8%",
                borderRadius: "10px",
                color: "white",
                width: "50%",
              }}
              style={{ boxShadow: "5px 5px 10px #009254" }}
              onClick={() => {
                greenOption = 2;
                ques.selected = ques.options[2].option;

                setForce(!force);
              }}
            >
              {ques.options[2].option}
            </Button>

            {greenOption === 3
              ? (OptCol = "greenUsed")
              : (OptCol = "blackOptions")}
            <Button
              variant="contained"
              color={OptCol}
              sx={{
                padding: "1% 4%",
                margin: "5% 8%",
                borderRadius: "10px",
                color: "white",
                width: "50%",
              }}
              style={{ boxShadow: "5px 5px 10px #009254" }}
              onClick={() => {
                greenOption = 3;

                ques.selected = ques.options[3].option;

                setForce(!force);
              }}
            >
              {ques.options[3].option}
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              padding: "5% 0%",
              width: "100%",
            }}
          >
            {present_index !== 0 && (
              <Link to={`/quiz/ques/${prevQues.id}`}>
                <Button
                  variant="text"
                  color="greenUsed"
                  sx={{ color: "white" }}
                >
                  PREVIOUS QUESTION
                </Button>
              </Link>
            )}

            <Button
              variant="contained"
              color="greenUsed"
              sx={{ color: "white" }}
              onClick={() => {
                // API
                ques.submitted = true;
                ans++;
                not_ans--;

                props.handleChange(ques_id);

                fetch("https://recportal-iete.herokuapp.com/auth/sub/", {
                  method: "POST",
                  headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    question: ques.id,
                    ques_type: ques.ques_type,
                    option: ques.selected,
                    domain: localStorage.getItem("domain"),
                  }),
                });
              }}
            >
              SUBMIT
            </Button>

            {questions.length - 1 !== present_index && (
              <Link to={`/quiz/ques/${parseInt(nextQues.id)}`}>
                <Button
                  variant="contained"
                  color="greenUsed"
                  sx={{ color: "white" }}
                >
                  NEXT QUESTION
                </Button>
              </Link>
            )}
            <Link to={`/endquiz`}>
              <Button
                variant="outlined"
                color="greenUsed"
                sx={{ color: "white " }}
              >
                SUBMIT TEST
              </Button>
            </Link>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  ) : ques.ques_type == 1 ? (
    <ThemeProvider theme={theme}>
      <Container sx={{ width: "70%", background: "black" }}>
        <Box>
          <Typography
            fontFamily="Monument Extended"
            sx={{
              color: "white",
              textAlign: "center",
              padding: "10% 5% 5% 5%",
              fontSize: "150%",
            }}
          >
            TEST YOUR KNOWLEDGE
          </Typography>

          <Typography
            variant="h5"
            fontFamily="Monument extended"
            color="white"
            sx={{ padding: "0% 2% 5% 2%", display: "inline" }}
          >
            {" "}
            Section 2
          </Typography>

          <br />

          <Typography
            fontFamily="Poppins"
            variant="h5"
            color="#009254"
            sx={{ display: "inline", margin: "5% 2%", padding: "2% 2%" }}
          >
            Question: {index + 1} &nbsp;
          </Typography>

          <Typography
            fontFamily="Poppins"
            variant="h5"
            sx={{ display: "inline", margin: "2% 0%", color: "white" }}
          >
            {ques.ques_main}
          </Typography>

          <Box sx={{ padding: "4%" }} id="longAnswerBox">
            <TextField
              color="whiteUsed"
              variant="outlined"
              multiline
              rows={10}
              fullWidth
              id="longAnswer"
              defaultValue={ques.answer}
              placeholder="Answer"
              sx={{
                background: "#009254",
                borderRadius: "10px",
                border: "#009254",
              }}
              onChange={handleChangeLQ}
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            padding: "5% 0%",
          }}
        >
          {present_index !== 0 && (
            <Link to={`/quiz/ques/${prevQues.id}`}>
              <Button variant="text" color="greenUsed" sx={{ color: "white" }}>
                PREVIOUS QUESTION
              </Button>
            </Link>
          )}

          <Button
            variant="contained"
            color="greenUsed"
            sx={{ color: "white" }}
            onClick={() => {
              ans++;
              not_ans--;

              props.handleChange(ques_id);

              // API
              fetch("https://recportal-iete.herokuapp.com/auth/sub/", {
                method: "POST",
                headers: {
                  Authorization: token,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  question: ques.id,
                  ques_type: ques.ques_type,
                  option: ques.answer,
                  domain: localStorage.getItem("domain"),
                }),
              });
            }}
          >
            SUBMIT
          </Button>

          {questions.length - 1 !== present_index && (
            <Link to={`/quiz/ques/${parseInt(nextQues.id)}`}>
              <Button
                variant="contained"
                color="greenUsed"
                sx={{ color: "white" }}
              >
                NEXT QUESTION
              </Button>
            </Link>
          )}

          <Link to={`/endquiz`}>
            <Button
              variant="outlined"
              color="greenUsed"
              sx={{ color: "white ", display: "block" }}
            >
              SUBMIT TEST
            </Button>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  ) : (
    <Loading />
  );
};

export default Question;
