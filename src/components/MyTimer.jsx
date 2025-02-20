/* eslint-disable react-hooks/exhaustive-deps */
import 'boxicons'
import { useTimer } from 'react-timer-hook'
import useTimerStore from './store/useTimerStore';
import { useEffect, useState } from 'react';
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Snow from "react-canvas-confetti/dist/presets/snow";

function MyTimer() {
    const { customTime, setCustomTime, modoFocus, descansoCorto, descansoLargo, setIsRunning, isModoFocus, isDescansoCorto, isDescansoLargo } = useTimerStore();
    const workCycleDuration = (1 * 60 * customTime); // 25 minutos
    const alarmSound = new Audio('../../public/audio/love-alarm.mp3');
    const time = new Date();
    const [showFireworks, setShowFireworks] = useState(false);
    time.setSeconds(time.getSeconds() + workCycleDuration);
    const { seconds, minutes, restart, pause, resume, isRunning } = useTimer({ expiryTimestamp: time, onExpire: () => { alarmSound.play(); setShowFireworks(true) } });

    const restartTimer = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + workCycleDuration);
        restart(time);
        pause();
    };


    function handleInputChange(event) {
        const value = event.target.value;
        setCustomTime(value);
    }
    useEffect(() => {
        // console.log(customTime);
        restartTimer();
        pause();
    }, [customTime]);

    useEffect(() => {
        // console.log(customTime);
        pause();
    }, []);
    useEffect(() => {
        // console.log({ isRunning });
        setIsRunning(false);
        if (!isRunning && !(isDescansoCorto || isDescansoLargo || isModoFocus)) {
            descansoCorto(false);
            descansoLargo(false);
            modoFocus(false);
            // console.log('no esta corriendo')
        }
        if (isRunning) {
            setShowFireworks(false);
        }
    }, [isRunning]);
    // console.log({ customTime })



    return (
        <div className='heart flex flex-col items-center justify-center h-[70vh]'>
            <div className='m-2 flex gap-2 justify-center items-center'>
                <box-icon
                    onClick={restartTimer}
                    name='refresh'
                    size="md"
                    type="solid"
                    className="rounded-full fill-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:fill-white transition-colors duration-300 ease-in-out active:scale-95">
                </box-icon>

                <box-icon
                    onClick={resume}
                    name='play'
                    size="md"
                    type="solid"
                    className={`pl-1 rounded-full fill-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:fill-white transition-colors duration-300 ease-in-out active:scale-95` + (isRunning ? ' bg-[var(--color-primary)] fill-white' : '')}>
                </box-icon>

                <box-icon
                    onClick={pause}
                    name='pause'
                    size="md"
                    type="solid"
                    className={`rounded-full fill-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:fill-white transition-colors duration-300 ease-in-out active:scale-95` + (!isRunning ? ' bg-[var(--color-primary)] fill-white' : '')}>
                </box-icon>
            </div>
            <span className="countdown agdasima text-8xl mb-[25vh]">
                <span style={{ "--value": minutes }}></span>:
                <span style={{ "--value": seconds }}></span>
            </span >
            {showFireworks && <>
                {/* <Fireworks autorun={{ speed: 3, duration: 5000 }} /> */}
                <Snow autorun={{ speed: 60, duration: 5000 }} />
            </>}
        </div>
    );
}

export default MyTimer