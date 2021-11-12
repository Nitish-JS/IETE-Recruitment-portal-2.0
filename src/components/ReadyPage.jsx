import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import QuizMain from './Quiz/QuizMain';

const ReadyPage = () => {
    return (
        <div>
            <h1>Ready Page</h1>
            <Link to="/quiz/ques/1">
                <button>Take Test</button>
            </Link>
        </div>
    )
}

export default ReadyPage