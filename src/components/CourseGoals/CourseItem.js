import React from 'react';
import styles from './CourseItem.module.css';

const CourseItem = ({item, onDelete}) => {

    const deleteHandler = e => {
        // 삭제 대상의 id 를 App.js 에게 전달
        onDelete(item.id);
    }

    return (
        <li className={styles['goal-item']} onClick={deleteHandler}>
            {item.text}
        </li>
    );
};

export default CourseItem;