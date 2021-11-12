import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import QuizMain from './Quiz/QuizMain';

const ReadyPage = () => {
    return (
        <div>
            <Router>
                <h1>Ready Page</h1>
                <Link to="/quiz">
                    <button>Take Test</button>
                </Link>
                
                <Switch>
                    <Route path="/quiz">
                        <QuizMain />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default ReadyPage