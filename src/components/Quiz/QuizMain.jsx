import React, {useState} from 'react';
import Question from './Question';
import NavQuiz from './NavQuiz';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const QuizMain = () => {

    <Router>
        <Switch>
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

    return(
        <div>
            <h1>Quiz Main Page</h1>
            <NavQuiz />
        </div>
    )

    // const [step, setStep] = useState(1);
    // const [ques1, setQues1] = useState({
    //     "question" : "QUESTION-1",
    //     "options" : ["Apple","Bag","Cat","Dog"],
    //     "answer" : ""
    // })
    // const [ques2, setQues2] = useState({
    //     "question" : "QUESTION-2",
    //     "options" : ["Apple","Bag","Cat","Dog"],
    //     "answer" : ""
    // })
    // const [ques3, setQues3] = useState({
    //     "question" : "QUESTION-3",
    //     "options" : ["Apple","Bag","Cat","Dog"],
    //     "answer" : ""
    // })

    // const nextStep = () => {
    //     setStep(step + 1)
    //     console.log("In NextStep");
    //     console.log("Step: ",step);
    // }

    // switch(step){
    //     case 1: 
    //         console.log("In CASE - 1");
    //         return (
    //             <>
    //                 <NavQuiz />
    //                 <Question step={step} ques={ques1} nextStep={nextStep} />
    //             </>
    //         )

    //     case 2: 
    //         return (
    //             <>
    //                 <h3>{ques2.question}</h3>
    //                 <ul>
    //                     <li>{ques2.options[0]}</li>
    //                     <li>{ques2.options[1]}</li>
    //                     <li>{ques2.options[2]}</li>
    //                     <li>{ques2.options[3]}</li>
    //                 </ul>
    //             </>
    //         )

    //     case 3: 
    //         return (
    //             <>
    //                 <h3>{ques3.question}</h3>
    //                 <ul>
    //                     <li>{ques3.options[0]}</li>
    //                     <li>{ques3.options[1]}</li>
    //                     <li>{ques3.options[2]}</li>
    //                     <li>{ques3.options[3]}</li>
    //                 </ul>
    //             </>
    //         )
    // }
}

export default QuizMain