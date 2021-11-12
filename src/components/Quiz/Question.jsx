import React from 'react';
import NavQuiz from './NavQuiz'

const Question = (props) => {
    const { id } = props;
    // const { step, ques, nextStep } = props;
    // const { question, options, answer } = ques;

    

    return (
        <div>
            <h1>Question {id}</h1>
            



            {/* <h1>{question}</h1>
            <input type="checkbox" name="option1" value={options[0]} />{options[0]}
            <input type="checkbox" name="option2" value={options[1]} />{options[1]}<br />
            <input type="checkbox" name="option3" value={options[2]} />{options[2]}
            <input type="checkbox" name="option4" value={options[3]} />{options[3]}<br />
            <button>Previous</button>
            <button onClick={() => {
                console.log("Test");
                nextStep();
            }}>Next</button> */}
        </div>
    )
}

export default Question