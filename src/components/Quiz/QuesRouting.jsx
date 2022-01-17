// import React, {useState} from 'react';
import React,{useState, useEffect} from 'react';
import Question from './Question';
import NavQuiz from './NavQuiz';
import Clock from './Clock';
import EndQuiz from './EndQuiz';
import { Container } from '@mui/material';
import Loading from './Loading';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoutes';

let token = "";

try{
    token="Bearer "+JSON.parse(localStorage.getItem('token')).jwt;
} catch (error) {
    console.log(error);
}

const QuesRouting = (props) => {
    // const [step, setStep] = useState(1);
    
    let question_arr = [];
    let totalDuration;
    let startTime;

    const [questions, setQuestions] = useState(question_arr);
    let questions_new;
    const [clock, setClock] = useState(0);
    // const [seconds, setSeconds] = useState(0);

    console.log("START of QuesRouting");

    useEffect(async () => {
        await fetch(
            "https://recportal-iete.herokuapp.com/auth/q/",
            {
                method: "POST",
                headers: { "Authorization":token, "Content-Type": "application/json" },
                body: JSON.stringify({
                    domain: 1
                }),
                
            }
        )
        .then(response => response.json())
        .then(json => {
            setQuestions([...json.data])
            
            // totalDuration = json.totalduration;
            // startTime = json.starttime;
            // // console.log("TOTAL DURATION:",totalDuration);
            // console.log("START TIME:",startTime);
            // var today = new Date();
            // // var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            // var time = today.toLocaleTimeString();
            // console.log("CURRENT TIME:",time);

            // // var timeLeft = time - startTime;
            // var timeLeft=(today.getHours()*60+today.getMinutes())-(startTime.split(':')[1]*60 + startTime.split(':')[2]);
            // console.log("TIME LEFT:",timeLeft);


            questions_new = questions;
            console.log("Questions NEW in useEffect: ",questions_new);

        })
    },[])

    console.log("QUESTIONS:",questions);

    const handleChange = (id_to_find) => {
        console.log("QUESTIONS in Route: ",questions);

        // for (let i=0; i<questions.length; i++)
        //     if (questions[i].id === id_to_find)
        //         questions_new[i].submitted = true;
        for (let i = 0; i<questions.length; i++)
            if (questions[i].id == id_to_find)
                questions[i].submitted = true;
    
        console.log("Questions after updation:",questions);
        setQuestions(questions);
        console.log("Questions after state update:",questions);

        
        // console.log("QUESTIONS NEW IN ROUTING:",questions_new);
        // setQuestions(questions_new);
    }

    const handleClock = () => {
        return(<EndQuiz/>)
    }

    return (
        (questions.length == 0)?
        <Loading/>
        :
        <Container maxWidth="xl" style={{ background: "black", height: "100vh", overflow: "auto" }}>
            <Router>
                <div style={{ display: "flex" }}>
                    
                
                    <Route path = "/quiz/ques/:ques_id">
                        <div style={{ width: "25%", paddingTop: "5%"}}>
                            <Clock handleClock = {handleClock}/>
                            <NavQuiz questions={questions} />
                        </div>
                        <Question questions={questions} handleChange={handleChange}/>
                    </Route>

                    <Route path = "/endquiz">
                        <EndQuiz />
                    </Route>

                    {/* <Route path = "/endquiz/:ans/:not-ans">
                        <EndQuiz />
                    </Route> */}
                </div>
            </Router>
        </Container>
    )
}

export default QuesRouting