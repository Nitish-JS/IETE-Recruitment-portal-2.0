// import React, {useState} from 'react';
import React from 'react';
import QuesRouting from './QuesRouting';
import NavQuiz from './NavQuiz';
import Clock from './Clock';
import EndQuiz from './EndQuiz';
import { Container } from '@mui/material';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoutes';

const QuizQuesRouting = (props) => {
    
    return (
        <Container maxWidth="xl" style={{ background: "black", height: "100vh", overflow: "auto" }}>
            <Router>
                <div style={{ display: "flex" }}>
    
                    <Switch>
                        <Route path="/ques">
                            <QuesRouting/>
                        </Route>
                        <Route path = "/endquiz">
                            <EndQuiz />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Container>
    )
}

export default QuizQuesRouting