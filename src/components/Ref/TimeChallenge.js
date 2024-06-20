import React, {useState} from 'react';

    let timer;
const TimerChallenge = ({title, targetTime}) => {

    // 타이머가 시작되었는지를 확인하는 상태값
    const [timerStarted, setTimerStarted] = useState(false);

    // 타겟시간이 종료되었는지 여부
    const [timerExpired, setTimerExpired] = useState(false);

    const startHandler = e => {

        timer = setTimeout(() => {
            // console.log('시간 만료 배윙');
        setTimerExpired(true);
        }, targetTime * 1000)

        setTimerStarted(true);
    }

    // 전역변수로 timer 설정시 연속으로 클릭하면 전에 클릭한 timer 가 정상작동하지 않음
    // 모든 TimeChallenge 컴포넌트가 1개의 timer 를 공유하기 때문
    const stopHandler = e => {
        clearTimeout(timer);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>YOU LOSER ㅋㅋ</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? stopHandler : startHandler }>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' :  'Timer inactive'}
            </p>
        </section>
    );
};

export default TimerChallenge;