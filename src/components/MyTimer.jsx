import 'boxicons'
import { useState } from 'react';
import { useTimer } from 'react-timer-hook'
import useTimerStore from './store/useTimerStore'; // Asegúrate de que la ruta sea correcta

function MyTimer() {
    const { customTime, setCustomTime } = useTimerStore(); // Obtén el estado y la función
    const workCycleDuration = (1 * 60 * customTime); // 25 minutos en segundos
    const time = new Date();
    time.setSeconds(time.getSeconds() + workCycleDuration);
    const { seconds, minutes, restart, pause, resume } = useTimer({ expiryTimestamp: time });

    const restartTimer = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + workCycleDuration);
        restart(time);
    };

    const secondsFormatted = String(seconds).padStart(2, '0');
    const minutesFormatted = String(minutes);
    const displayMinutes = minutesFormatted[0] === '0' ? minutesFormatted.slice(1) : minutesFormatted;


    function handleInputChange(event) {
        const value = event.target.value;
        console.log(value);
        setCustomTime(value);
    }

    return (
        <>
            <div className='flex justify-center'>
                {/* <p>{hours}:</p> */}
                <p>{displayMinutes}:</p>
                <p>{secondsFormatted}</p>
            </div>
            <input onChange={handleInputChange} type="number" />
            <button onClick={restartTimer}><box-icon name='rotate-left'></box-icon></button>
            <button onClick={resume}><box-icon name='play'></box-icon></button>
            <button onClick={pause}><box-icon name='pause'></box-icon></button>
            <span className="countdown font-mono text-2xl">
                <span style={{ "--value": minutes }}></span>m
                <span style={{ "--value": seconds }}></span>s
            </span >
        </>
    );
}

export default MyTimer