// import React, {useState} from 'react';
import React from 'react';
import Question from './Question';
import NavQuiz from './NavQuiz';
import Clock from './Clock';
<<<<<<< HEAD
=======
import EndQuiz from './EndQuiz';
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
import { Container } from '@mui/material';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoutes';

const QuesRouting = (props) => {
    // const [step, setStep] = useState(1);
    
    return (
        <Container maxWidth="xl" style={{ background: "black", height: "100vh", overflow: "auto" }}>
            <Router>
                <div style={{ display: "flex" }}>
<<<<<<< HEAD
                    <div style={{ width: "25%", paddingTop: "5%"}}>
                        <Clock />
                        <NavQuiz />
                    </div>
                
                    <Route path = "/quiz/ques/:ques_id">
                        <Question />
                    </Route>
=======
                    
                
                    <Route path = "/quiz/ques/:ques_id">
                        <div style={{ width: "25%", paddingTop: "5%"}}>
                            <Clock />
                            <NavQuiz />
                        </div>
                        <Question />
                    </Route>

                    <Route path = "/endquiz">
                        <EndQuiz />
                    </Route>

                    {/* <Route path = "/endquiz/:ans/:not-ans">
                        <EndQuiz />
                    </Route> */}
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
                </div>
            </Router>
        </Container>
    )
}

export default QuesRouting