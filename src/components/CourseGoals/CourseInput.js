import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({onAdd}) => {

    // 목표 인풋에 입력한 값
    const [enteredText, setEnteredText] = useState('');

    // 입력값 검증을 통과했는지 여부 상태관리
    const [isvalid, setIsvalid] = useState(true);

    const formSubmitHandler = e => {
        e.preventDefault();

        // 텍스트 없으면 false return 처리
        if(enteredText.trim().length === 0) {
            setIsvalid(false);
            return;
        }

        const newGoalObject = {
            id: Math.random().toString(),
            text: enteredText
        };

        onAdd(newGoalObject);

        setEnteredText(''); // value 전송 후에 input 비워주기
    };

    const goalChangedHandler = (e) => {

        const inputValue = e.target.value;

        // 입력값 검증
        if(inputValue.trim().length > 0) {
            setIsvalid(true);

        }

        setEnteredText(inputValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>나의 목표</label>
                <input
                    type="text"
                    onChange={goalChangedHandler}
                    value={enteredText}
                    style={{
                        backgroundColor: isvalid ? 'transparent' : 'salmon',
                        borderColor: isvalid ? 'black' : 'red',
                    }}
                />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
