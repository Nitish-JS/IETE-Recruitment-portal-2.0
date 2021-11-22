import React, { Component } from 'react';
import '../../style/Quiz/NavQuiz.css';
import {Link} from 'react-router-dom';
import Question from './Question'



class NavQuiz extends Component {
    render() {
        return (
            <div className="container">
                <div className="heading">QUESTIONS: </div>
                <div className="quesContainer">
                    <div className="ques">
                        <Link to="/quiz/ques/1">
                            1
                        </Link>
                    </div>
                    <div className="ques">
                        <Link to="/quiz/ques/2">
                            2
                        </Link>
                    </div>
                    <div className="ques">
                        <Link to="/quiz/ques/3">
                            3
                        </Link>
                    </div>
                    {/* <div className="ques">4</div>
                    <div className="ques">5</div>
                    <div className="ques">6</div>
                    <div className="ques">7</div>
                    <div className="ques">8</div>
                    <div className="ques">9</div>
                    <div className="ques">10</div>
                    <div className="ques">11</div>
                    <div className="ques">12</div>
                    <div className="ques">13</div>
                    <div className="ques">14</div>
                    <div className="ques">15</div>
                    <div className="ques">16</div>
                    <div className="ques">17</div>
                    <div className="ques">18</div>
                    <div className="ques">19</div>
                    <div className="ques">20</div> */}
                </div>
            </div>
        )
    }
}

export default NavQuiz