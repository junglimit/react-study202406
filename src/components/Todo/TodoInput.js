import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = () => {

    const [clickBtn, setClickBtn] = useState(false);

    const [enteredText, setEnteredText] = useState('');

    const toggle = () => {
        setClickBtn(!clickBtn)
    }

    const TodoHandler = (e) => {

        const newTodo = enteredText;
    }

    return (
        <>
            <div className={clickBtn === false ? 'form-wrapper' : 'form-wrapper open'}>
                <form className='insert-form' onSubmit={TodoHandler}>
                    <input
                        onchange={e => {setEnteredText(e.target.value)}}
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                        value={enteredText}
                    />
                </form>
            </div>
            <button className={clickBtn === false ? 'insert-btn' : 'insert-btn open'} onClick={toggle}>
                <MdAdd/>
            </button>
        </>
    );
};

export default TodoInput;