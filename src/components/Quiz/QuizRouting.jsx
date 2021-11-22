import React from 'react';
import ReadyPage from '../ReadyPage';
import QuesRouting from './QuesRouting';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const QuizRouting = () => {
    return (
        <div>
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
        </div>
    )
}

export default QuizRouting
