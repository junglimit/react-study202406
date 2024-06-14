import React from 'react';
import './CourseItem.css';

const CourseItem = ({item, onDelete}) => {

    const deleteHandler = e => {
        // console.log('삭제고고')
        // 삭제 대상의 id 를 App.js 에게 전달
        onDelete(item.id);
    }

    return (
        <li className='goal-item' onClick={deleteHandler}>
            {item.text}
        </li>
    );
};

export default CourseItem;