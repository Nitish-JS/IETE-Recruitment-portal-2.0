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

let token = "";

try {
  token = "Bearer " + JSON.parse(localStorage.getItem("token")).jwt;
} catch (error) {
  console.log(error);
}

const QuesRouting = (props) => {
  let question_arr = [];
  let totalDuration;
  let startTime;

  const [questions, setQuestions] = useState(question_arr);
  const [minutes, setMinutes] = useState(0);

  useEffect(async () => {
    await fetch("https://recportal-iete.onrender.com/auth/q/", {
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

        var today = new Date();
        var time = today.toLocaleTimeString();
        var currentTime_moment = moment(time, "HH:mm:ss a");

        let time_left = moment.duration(endTime.diff(currentTime_moment));
        setMinutes(time_left._data.minutes + 1);
      });
  }, []);

  const handleChange = (id_to_find) => {
    for (let i = 0; i < questions.length; i++)
      if (questions[i].id == id_to_find) questions[i].submitted = true;

    setQuestions([...questions]);
  };

  const handleClock = () => {
    return <EndQuiz question={questions} />;
  };

  return questions.length === 0 && minutes === 0 ? (
    <Loading />
  ) : (
    <Container
      maxWidth="xl"
      style={{ background: "black", height: "100vh", overflow: "auto" }}
    >
      <Router>
        <Switch>
          <div style={{ display: "flex" }}>
            <Route path="/quiz/ques/:ques_id">
              <div
                style={{
                  width: "25%",
                  paddingTop: "5%",
                  height: "1000px",
                  overflow: "scroll",
                }}
              >
                <Clock minutes={minutes} handleClock={handleClock} />
                <NavQuiz questions={questions} />
              </div>
              <Question questions={questions} handleChange={handleChange} />
            </Route>

            <Route path="/endquiz">
              <EndQuiz questions={questions} />
            </Route>
          </div>
        </Switch>
      </Router>
    </Container>
  );
};

export default QuesRouting;
