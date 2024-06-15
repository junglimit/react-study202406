import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({onAdd}) => {

    const [enteredText, setEnteredText] = useState('');

    const formSubmitHandler = e => {
        e.preventDefault();
        const newGoalObject = {
            id: Math.random().toString(),
            text: enteredText
        };

        onAdd(newGoalObject);

        setEnteredText(''); // value 전송 후에 input 비워주기
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>나의 목표</label>
                <input type="text" onChange={e => setEnteredText(e.target.value)} value={enteredText} />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
