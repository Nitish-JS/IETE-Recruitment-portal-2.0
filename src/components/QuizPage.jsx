import React, { Component } from 'react';
import NavQuiz from './Quiz/NavQuiz';

class QuizPage extends Component {
    render() {

        const NavStyle = {
            background: "black",
        };

        
        return (
            <div  style={NavStyle}>
                <NavQuiz />
            </div>
        )
    }
}

export default QuizPage
