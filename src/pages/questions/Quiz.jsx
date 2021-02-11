import React, {useState} from 'react';
import Question from "./Question";
import questionBase from "../../constants/questionBase";
import fluffy from '../../constants/images/Fluffy.png';
import './quiz.scss'
import Button from "@material-ui/core/Button";

function Quiz() {

    const [questionNumber, setQuestionNumber] = useState(1)

    const nextQuestion = () => {
        setQuestionNumber(questionNumber + 1);
    }

    const previousQuestion = () => {
        setQuestionNumber(questionNumber - 1);
    }

    return (
        <div >
        <Question
            questionNumber={questionNumber}
            question={questionBase.questions[questionNumber]}
            answers={questionBase.answers[questionNumber]}/>
        <img src={fluffy} alt="Fluffy" id="fluffy"/>
        <div className="button">
        <Button variant="contained" color="primary" onClick={previousQuestion}>
                Previous Question
        </Button>
            <Button variant="contained" color="secondary" onClick={nextQuestion}>
                Next Question
            </Button>
        </div>
        </div>
    )
}

export default Quiz;
