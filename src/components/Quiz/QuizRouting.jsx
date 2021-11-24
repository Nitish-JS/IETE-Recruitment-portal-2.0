import React from 'react';
import ReadyPage from '../ReadyPage';
import QuesRouting from './QuesRouting';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from '@mui/material';



const QuizRouting = () => {
    return (
        <Container maxWidth="xl" style={{ background: "black", height: "100vh", overflow: "auto" }}>
            <Router>
                <Switch>
                    <Route path="/ready" exact>
                        <ReadyPage />
                    </Route>
                    <Route path="/">
                        <QuesRouting />
                    </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default QuizRouting
