import React from 'react';
import ReadyPage from '../ReadyPage';
import QuesRouting from './QuesRouting';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from '@mui/material';

// import Home from '../Home';
// import Drawer from '../drawer';
// import { makeStyles } from '@mui/styles';
// import Routing from '../Routing';
import ProtectedRoute from './ProtectedRoutes';
import EndQuiz from './EndQuiz';



const QuizRouting = (props) => {

    

    return (
        <Container maxWidth="xl" style={{ background: "black", height: "100vh", overflow: "auto" }}>
            <Router>
                <Switch>
                    <ProtectedRoute path="/ready" exact component={ReadyPage} />
                    <Route path="/quiz" component={QuesRouting} />
                </Switch>
                
                
            </Router>
        </Container>
    )
}

export default QuizRouting
