import React, { useState, useEffect } from "react";
import EndQuiz from "./EndQuiz";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";

let token = "";

try {
  token = "Bearer " + JSON.parse(localStorage.getItem("token")).jwt;
} catch (error) {
  console.log(error);
}

const Clock = (props) => {
  // let sec = (props.minutes) * 60;
  const [seconds, setSeconds] = useState(0);

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
        console.log("RESPONSE: ", json);

        let totalDuration = json.totalduration;
        let startTime = json.starttime;
        var startTime_moment = moment(startTime, "HH:mm:ss a");
        var endTime = startTime_moment.add(totalDuration, "minutes");
        console.log("START TIME:", startTime);

        var today = new Date();
        var time = today.toLocaleTimeString();
        var currentTime_moment = moment(time, "HH:mm:ss a");
        console.log("CURRENT TIME:", time);

        var time_left = moment.duration(endTime.diff(currentTime_moment));
        console.log("TIME LEFT FINAL: ", time_left._data.minutes + 1);
        setSeconds((time_left._data.minutes + 1) * 60);

        // setSeconds(json.totalduration * 60);
      });
  }, []);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      // return <Redirect to="/endquiz" />
      props.handleClock();
      setSeconds("TIME OVER!");
    }
  });

  return (
    <div>
      <h1
        style={{
          color: "white",
          background: "#009254",
          textAlign: "center",
          margin: "10%",
          padding: "7%",
          borderRadius: "20px",
        }}
      >
        {Math.floor(seconds / 60)} : {seconds % 60}
      </h1>
      {/* <h1 style={{ color: "white" }}>Clock</h1> */}
    </div>
  );
};

export default Clock;
