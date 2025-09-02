import React, { useState, useRef, useEffect } from 'react';

function Pomodoro() {
    // const [timeLeft, setTimeLeft] = useState(25 * 60);
    // const [isRunning, setIsRunning] = useState(false);
    // const [status, setStatus] = useState('Ready to focus.');
    const [totalTimeToday, setTotalTimeToday] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [achievedTasks, setAchievedTasks] = useState([]);
    const [showTaskInput, setShowTaskInput] = useState(false);
    const [newTask, setNewTask] = useState('');
    const timerRef = useRef(null);

    // Timer effect
    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev > 0) {
                        setTotalTimeToday(t => t + 1);
                        return prev - 1;
                    } else {
                        clearInterval(timerRef.current);
                        setIsRunning(false);
                        setStatus('Break time!');
                        setTimeLeft(25 * 60);
                        return 25 * 60;
                    }
                });
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    // Timer display formatting
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Total time formatting
    const totalHours = Math.floor(totalTimeToday / 3600);
    const totalMinutes = Math.floor((totalTimeToday % 3600) / 60);

    // Handlers
    const handleStart = () => {
        if (!isRunning) {
            setIsRunning(true);
            setStatus('Focusing...');
        }
    };

    const handlePause = () => {
        setIsRunning(false);
        setStatus('Paused.');
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(25 * 60);
        setStatus('Ready to focus.');
    };

    const handleAddTask = () => {
        setShowTaskInput(true);
    };

    const handleTaskInput = (e) => {
        setNewTask(e.target.value);
    };

    const handleTaskKeyDown = (e) => {
        if (e.key === 'Enter' && newTask.trim() !== '') {
            setTasks([...tasks, newTask.trim()]);
            setNewTask('');
            setShowTaskInput(false);
        }
    };

    // Move deleted task to achievedTasks
    const handleRemoveTask = (idx) => {
        setAchievedTasks([...achievedTasks, tasks[idx]]);
        setTasks(tasks.filter((_, i) => i !== idx));
    };

    return (
        <>
            <div className='flex h-screen'>
                <main className="w-full flex flex-col md:flex-row gap-8">
                    <div className="flex-1 flex flex-col items-center">

                        ...............................
                        <div className="text-6xl font-bold text-gray-800 my-8">
                            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                        </div>

                        <div className="flex space-x-4 mb-8">
                            {!isRunning && (
                                <button className="timer-button text-white px-6 py-3 rounded-lg font-semibold shadow-md bg-[#3b5a51]" onClick={handleStart}>
                                    Start
                                </button>
                            )}
                            {isRunning && (
                                <button className="timer-button bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md" onClick={handlePause}>
                                    Pause
                                </button>
                            )}
                            <button className="timer-button bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md" onClick={handleReset}>
                                Reset
                            </button>
                        </div>
...............................
                        <p className="text-gray-500 text-sm italic mb-8">{status}</p>

                        <div className="w-full">
                            <h3 className="text-md font-semibold text-gray-600 mb-2">Ranking</h3>
                            <div className="mb-2 text-lg font-bold text-[#3b5a51]">
                                Tasks Done: {achievedTasks.length}
                            </div>
                            {achievedTasks.length > 0 && (
                                <ul className="mb-4 space-y-2">
                                    {achievedTasks.map((task, idx) => (
                                        <li key={idx} className="text-green-700 text-sm bg-green-50 px-2 py-1 rounded">
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                        ...............................
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1 mb-8 p-6 rounded-2xl bg-white shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-700">Tasks</h3>
                                <button className="text-white bg-[#3b5a51] p-2 rounded-full shadow-md hover:bg-[#2c453e] transition-colors" onClick={handleAddTask}>+</button>
                            </div>
                                                    ...............................
                            {showTaskInput && (
                                <input
                                    type="text"
                                    placeholder="Add a new task..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[#3b5a51] border border-gray-200 mb-4"
                                    value={newTask}
                                    onChange={handleTaskInput}
                                    onKeyDown={handleTaskKeyDown}
                                    autoFocus
                                />
                            )}
                            <ul className="space-y-3">
                                {tasks.map((task, idx) => (
                                    <li key={idx} className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                                        <span className="text-gray-700">{task}</span>
                                        <button className="text-red-500 hover:text-red-700 text-sm" onClick={() => handleRemoveTask(idx)}>
                                            &times;
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {/* Achieved Tasks */}
                            {achievedTasks.length > 0 && (
                                <>
                                    <h3 className="text-md font-semibold text-gray-600 mt-6 mb-2">Achieved Tasks</h3>
                                    <ul className="space-y-3">
                                        {achievedTasks.map((task, idx) => (
                                            <li key={idx} className="flex items-center bg-green-50 px-4 py-3 rounded-lg border border-green-200">
                                                <span className="text-green-700">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
...............................
                        <div className="p-6 rounded-2xl bg-[#e0f0eb] shadow-sm border border-[#3b5a51] text-center">
                            <h3 className="text-lg font-semibold text-[#3b5a51] mb-2">Total Focus Time</h3>
                            <div className="text-4xl font-bold text-[#3b5a51]">
                                <span>{totalHours}</span>h
                                <span>{String(totalMinutes).padStart(2, '0')}</span>m
                            </div>
                            <p className="text-gray-500 text-sm mt-2">Today</p>
                        </div>

                        ...............................
                    </div>
                </main>
            </div>
        </>
    );
}

export default Pomodoro