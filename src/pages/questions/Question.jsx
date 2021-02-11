import React from 'react';
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './question.scss'

function Question(props) {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const answerList = props.answers.map((answer)=>{
        return <FormControlLabel value={answer} control={<Radio/>} label={answer} />
    })

    return (
        <div>
        <h1>
            Question {props.questionNumber}
        </h1>
            <h2>
                {props.question}
            </h2>
            <FormControl>
            <RadioGroup value={value} onChange={handleChange}>
                {answerList}
            </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Question;
