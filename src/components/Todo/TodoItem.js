import React, {useState} from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = () => {

    const [click, setClick] = useState(false);

    const toggle = () => {
        setClick(!click);
    }

    return (
        <li className='todo-list-item' onClick={toggle}>
            <div className={click === false ? 'check-circle' : 'check-circle active'} >
                <MdDone/>
            </div>
            <span className={click === false ? 'text' : 'text finish'} >할 일 어쩌구~~</span>
            <div className='remove'>
                <MdDelete/>
            </div>
        </li>
    );
};

export default TodoItem;