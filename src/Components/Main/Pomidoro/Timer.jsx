import React, { useEffect, useState, useRef } from 'react'

function Timer() {
    const [isRunning, setIsRunning] = useState(false);
    const [status, setStatus] = useState('Ready to focus')
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [totalTimeToday, setTotalTimeToday] = useState(0);

    const timerRef = useRef(null);
    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev > 0) {
                        setTotalTimeToday(t => t + 1);
                        return prev - 1;
                    }
                    else {
                        clearInterval(timerRef.current);
                        setIsRunning(false);
                        setStatus('Break time!');
                        setTimeLeft(25 * 60);
                        return 25 * 60;
                    }
                })
            }, 1000);   //every second
        }
        else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);


    }, [isRunning])

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    const handleStart = () => {
        setIsRunning(true);
        setStatus('Focusing...');
    }
    const handlePause = () => {
        setIsRunning(false);
        setStatus('Distracted? Take a deep breath and refocus.');
    }
    return (
        <>
            <div className="w-[50%] h-[40%] rounded-2xl border-0  border-teal-800 p-5">
                <div className="text-center text-black font-bold pt-10 text-6xl">
                    {minutes}:{seconds}
                </div>
                <div className='flex items-center justify-center gap-4 pt-8'>

                    {!isRunning && (
                        <button className=' text-white px-6 py-3 rounded-lg font-semibold shadow-md bg-[#3b5a51]' onClick={handleStart}>Start</button>
                    )}
                    {isRunning && (
                        <button className=' text-white px-6 py-3 rounded-lg font-semibold shadow-md bg-[#3b5a51]' onClick={handlePause}>Pause</button>
                    )}
                    <button className=' text-white px-6 py-3 rounded-lg font-semibold shadow-md bg-gray-500'>Reset</button>

                </div>
                <div className='text-center text-black font-extralight pt-8'>{status}</div>
            </div>

        </>

    )
}

export default Timer