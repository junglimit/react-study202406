import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = () => {
    // 오늘 날짜 불러오기
    const today = new Date();

    // 날짜 포맷팅
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;


    const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    let dayWeek = week[today.getDay()];

    return (
        <header>
            <h1>{formattedDate}</h1>
            <div className='day'>{dayWeek}</div>
            <div className='tasks-left'>할 일 3개 남음</div>
        </header>
    );
};

export default TodoHeader;