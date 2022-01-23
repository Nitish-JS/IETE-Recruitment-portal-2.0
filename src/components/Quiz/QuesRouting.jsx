// import React, {useState} from 'react';
import React, { useState, useEffect } from "react";
import Question from "./Question";
import NavQuiz from "./NavQuiz";
import Clock from "./Clock";
import EndQuiz from "./EndQuiz";
import { Container } from "@mui/material";
import Loading from "./Loading";
import moment from "moment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoutes";

let token = "";

try {
  token = "Bearer " + JSON.parse(localStorage.getItem("token")).jwt;
} catch (error) {
  console.log(error);
}

const QuesRouting = (props) => {
  // const [step, setStep] = useState(1);

  let question_arr = [];
  let totalDuration;
  let startTime;

  const [questions, setQuestions] = useState(question_arr);
  const [minutes, setMinutes] = useState(0);
  let questions_new;
  const [clock, setClock] = useState(0);
  // const [seconds, setSeconds] = useState(0);

  console.log("START of QuesRouting");

  useEffect(async () => {
    await fetch("https://recportal-iete.herokuapp.com/auth/q/", {
      method: "POST",
      headers: { Authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify({
        domain: localStorage.getItem("domain"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setQuestions([...json.data]);

        totalDuration = json.totalduration;
        startTime = json.starttime;
        var startTime_moment = moment(startTime, "HH:mm:ss a");
        var endTime = startTime_moment.add(totalDuration, "minutes");
        console.log("START TIME:", startTime);

        var today = new Date();
        var time = today.toLocaleTimeString();
        var currentTime_moment = moment(time, "HH:mm:ss a");
        console.log("CURRENT TIME:", time);

        var time_left = moment.duration(endTime.diff(currentTime_moment));
        console.log("TIME LEFT FINAL: ", time_left._data.minutes + 1);
        setMinutes(time_left._data.minutes + 1);
        console.log("MINUTES LEFT QUESROUTING:", minutes);
      });
  }, []);

  console.log("QUESTIONS:", questions);

  const handleChange = (id_to_find) => {
    for (let i = 0; i < questions.length; i++)
      if (questions[i].id == id_to_find) questions[i].submitted = true;

    console.log("QUESTIONS in QuesROUTING _____", questions);
    setQuestions([...questions]);
  };

  const handleClock = () => {
    return <EndQuiz />;
  };

  return questions.length == 0 ? (
    <Loading />
  ) : (
    <Container
      maxWidth="xl"
      style={{ background: "black", height: "100vh", overflow: "auto" }}
    >
      <Router>
        <div style={{ display: "flex" }}>
          <Route path="/quiz/ques/:ques_id">
            <div style={{ width: "25%", paddingTop: "5%" }}>
              <Clock minutes={minutes} handleClock={handleClock} />
              <NavQuiz questions={questions} />
            </div>
            <Question questions={questions} handleChange={handleChange} />
          </Route>

          <Route path="/endquiz">
            <EndQuiz />
          </Route>

          {/* <Route path = "/endquiz/:ans/:not-ans">
                        <EndQuiz />
                    </Route> */}
        </div>
      </Router>
    </Container>
  );
};

export default QuesRouting;
