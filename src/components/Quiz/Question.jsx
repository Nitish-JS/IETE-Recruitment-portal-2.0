import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import question_json from "../../questions.json";
import { Typography, Button, Box, Container, TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import EndQuiz from "./EndQuiz";

import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

try {
  token = "Bearer " + JSON.parse(localStorage.getItem("token")).jwt;
} catch (error) {
  console.log(error);
}

const Question = (props) => {
  const { pathname } = window.location;
  const path = pathname.split("/");
  console.log(path[3]);
  const { ques_id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [questions, setQuestions] = useState(
    JSON.parse(JSON.stringify(props.questions))
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [force2, setForce2] = useState(1);
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
  let i;
  for (i = 0; i < questions.length; i++)
    if (questions[i].id == ques_id) index = i;

  const [longAnswers, setlongAnswers] = useState([]);
  if (longAnswers[index] == undefined) longAnswers[index] = "";

  const handleChangeLQ = (e) => {
    const { name, value } = e.target;

    questions[index].answer = document.getElementById("longAnswer").value;
    longAnswers[index] = value;
    setlongAnswers([...longAnswers]);
    setQuestions(questions);
  };

  return ques.ques_type == 0 ? (
    <ThemeProvider theme={theme}>
      <Container sx={{ width: "70%" }}>
        <div style={{ background: "black" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "5%",
            }}
          >
            <div style={{ width: "75%" }}>
              <Typography
                fontFamily="Monument Extended"
                sx={{
                  color: "white",
                  textAlign: "center",
                  padding: "10% 0% 10% 0%",
                  fontSize: "150%",
                }}
              >
                TEST YOUR KNOWLEDGE
              </Typography>
            </div>
            <div style={{ width: "25%", marginTop: "5%" }}>
              <Button
                variant="contained"
                color="greenUsed"
                sx={{ color: "white ", display: "block", marginTop: "10%" }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                SUBMIT TEST
              </Button>
            </div>
          </Box>

          {/* <Typography
            variant="h5"
            fontFamily="Monument extended"
            color="white"
            sx={{ padding: "0% 2% 5% 2%" }}
          >
            {" "}
            Section 1
          </Typography> */}

          <Typography
            fontFamily="Poppins"
            variant="h5"
            color="#009254"
            sx={{ display: "inline", margin: "5% 2%", padding: "2% 2%" }}
          >
            Question: {index + 1} &nbsp;
          </Typography>
          <Box sx={{ width: "50%" }}>
            <pre
              // fontFamily="Poppins"
              // variant="h5"
              // sx={{ display: "inline", margin: "2% 2%", color: "white" }}
              style={{
                color: "white",
                padding: "0% 20%",
                fontSize: "120%",
                fontFamily: "Poppins",
                width: "70%",
              }}
            >
              {ques.ques_main}
            </pre>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: "2% 0%",
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
              <Link
                to={`/quiz/ques/${prevQues.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
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
              <Link
                to={`/quiz/ques/${parseInt(nextQues.id)}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  color="greenUsed"
                  sx={{ color: "white" }}
                >
                  NEXT QUESTION
                </Button>
              </Link>
            )}
            {/* <Button
              variant="outlined"
              color="greenUsed"
              sx={{ color: "white ", display: "block" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              SUBMIT TEST
            </Button> */}
            <Dialog
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
              sx={{ backgroundColor: "black" }}
            >
              <EndQuiz questions={questions} handleClose={handleClose} />
            </Dialog>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  ) : ques.ques_type == 1 ? (
    <ThemeProvider theme={theme}>
      <Container sx={{ width: "70%", background: "black" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "5%",
            }}
          >
            <div style={{ width: "75%" }}>
              <Typography
                fontFamily="Monument Extended"
                sx={{
                  color: "white",
                  textAlign: "center",
                  padding: "10% 0% 10% 0%",
                  fontSize: "150%",
                }}
              >
                TEST YOUR KNOWLEDGE
              </Typography>
            </div>
            <div style={{ width: "25%", marginTop: "5%" }}>
              <Button
                variant="contained"
                color="greenUsed"
                sx={{ color: "white ", display: "block", marginTop: "10%" }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                SUBMIT TEST
              </Button>
            </div>
          </Box>
          {/* <Typography
            fontFamily="Monument Extended"
            sx={{
              color: "white",
              textAlign: "center",
              padding: "10% 5% 5% 5%",
              fontSize: "150%",
            }}
          >
            TEST YOUR KNOWLEDGE
          </Typography> */}

          <br />

          <Typography
            fontFamily="Poppins"
            variant="h5"
            color="#009254"
            sx={{ display: "inline", margin: "5% 2%", padding: "2% 2%" }}
          >
            Question: {index + 1} &nbsp;
          </Typography>

          <pre
            // fontFamily="Poppins"
            // variant="h5"
            // sx={{ display: "inline", margin: "2% 2%", color: "white" }}
            style={{
              color: "white",
              padding: "0% 20%",
              fontSize: "120%",
              fontFamily: "Poppins",
            }}
          >
            {ques.ques_main}
          </pre>

          <Box sx={{ padding: "4%" }} id="longAnswerBox">
            <TextField
              name="longAnswer"
              color="whiteUsed"
              variant="outlined"
              multiline
              rows={10}
              fullWidth
              id="longAnswer"
              value={longAnswers[index]}
              placeholder={
                questions[index].answer
                  ? questions[index].answer
                  : "Answer here..."
              }
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
            <Link
              to={`/quiz/ques/${prevQues.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
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
            <Link
              to={`/quiz/ques/${parseInt(nextQues.id)}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                color="greenUsed"
                sx={{ color: "white" }}
              >
                NEXT QUESTION
              </Button>
            </Link>
          )}

          {/* <Button
            variant="outlined"
            color="greenUsed"
            sx={{ color: "white ", display: "block" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            SUBMIT TEST
          </Button> */}
          <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            sx={{ backgroundColor: "black" }}
          >
            <EndQuiz questions={questions} handleClose={handleClose} />
          </Dialog>
        </Box>
      </Container>
    </ThemeProvider>
  ) : (
    <Loading />
  );
};

export default Question;
