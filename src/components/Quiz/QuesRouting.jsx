import React, {useState} from 'react';
import Question from './Question';
import NavQuiz from './NavQuiz';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



const QuesRouting = () => {
    const [step, setStep] = useState(1);
    
    return (
        <div>
            <Router>
                <NavQuiz />
                <Switch>
                    {/* <Route path = {`/quiz/ques/{step}`}>
                        <Question id={step} />
                    </Route> */}
                    <Route path="/quiz/ques/1">
                        <Question id="1" />
                    </Route>
                    <Route path="/quiz/ques/2">
                        <Question id="2" />
                    </Route>
                    <Route path="/quiz/ques/3">
                        <Question id="3" />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default QuesRouting