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
  let sec = Number(props.minutes) * 60;
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setSeconds(sec);
  }, [sec, props.minutes]);

  React.useEffect(() => {
    if (seconds !== 0) {
      console.log("SECONDS in Clock: ", seconds);
      if (seconds > 1) {
        sec = sec - 1;
        setTimeout(() => setSeconds(seconds - 1), 1000);
      }
      if (seconds == 1) {
        window.location.href = "/thankyou";
        props.handleClock();
      }
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
    </div>
  );
};

export default Clock;
