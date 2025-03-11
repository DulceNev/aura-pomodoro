
import 'boxicons'
import { useTimer } from 'react-timer-hook'
import useTimerStore from './store/useTimerStore';
import { useEffect, useState } from 'react';
// import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Snow from "react-canvas-confetti/dist/presets/snow";
import IconButton from './common/IconButton';
function MyTimer() {
    const { customTime, modoFocus, descansoCorto, descansoLargo, setIsRunning, isModoFocus, isDescansoCorto, isDescansoLargo } = useTimerStore();

    const workCycleDuration = (1 * 60 * customTime); // 25 minutos
    const alarmSound = new Audio('/audio/love-alarm.mp3');
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
        <div className='relative flex flex-col items-center justify-start h-[70vh] pt-[76px]'>
            <div className="heart absolute top-0 left-0 w-full h-full z-[0]"></div>
            <div className="">

                <div className='m-2 flex gap-2 justify-center items-center relative '>

                    <IconButton
                        onClick={restartTimer}
                        icon='refresh'
                        hasTooltip={true}
                        tooltipText="Reiniciar"
                        tooltipPlace="top"
                    />

                    <IconButton
                        onClick={resume}
                        icon='play'
                        className="pl-1"
                        isActive={isRunning}
                        hasTooltip={true}
                        tooltipText="Iniciar"
                        tooltipPlace="top"
                    />

                    <IconButton
                        onClick={pause}
                        icon='pause'
                        isActive={!isRunning}
                        hasTooltip={true}
                        tooltipText="Pausar"
                        tooltipPlace="top"
                    />


                </div>
                <div className="relative flex">

                    <span className="countdown agdasima text-8xl ">
                        <span style={{ "--value": minutes }}></span>
                        :
                        <span style={{ "--value": seconds }}></span>

                    </span >

                </div>
            </div>
            {showFireworks && <>
                {/* <Fireworks autorun={{ speed: 3, duration: 5000 }} /> */}
                <Snow autorun={{ speed: 40, duration: 5000 }} />
            </>}
        </div>
    );
}

export default MyTimer