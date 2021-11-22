// import React, {useState} from 'react';
import React from 'react';
import Question from './Question';
import NavQuiz from './NavQuiz';
import { Container } from '@mui/material';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const QuesRouting = () => {
    // const [step, setStep] = useState(1);
    
    return (
        <Container maxWidth="xl" style={{ background: "black", height: "1000px" }}>
            <Router>
                <div style={{ display: "flex" }}>
                <NavQuiz />
                <Route path = "/quiz/ques/:ques_id">
                    <Question />
                </Route>
                </div>
            </Router>
        </Container>
    )
}

export default QuesRouting