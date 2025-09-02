import React from "react";
import { useEffect, useState, useRef } from "react";

import Total from "./Total";
import Tasks from "./Tasks";
import Timer from "./Timer";
import Rank from "./Rank";
import Done from "./Done";

function Pomodoro() {
  const [tasks, setTasks] = useState([{ id: Date.now(), text: "task1" }]);
  const [completed, setCompleted] = useState([]);
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    setShowTaskInput(true);
  };

  const handleTaskInput = (e) => setNewTask(e.target.value);
  const handleTaskKeyDown = (e) => {
    if (e.key === "Enter" && newTask.trim()) {
      addTask(newTask.trim());
      setNewTask("");
      setShowTaskInput(false);
    }
  };

  const addTask = (text) => {
    setTasks((t) => [...t, { id: Date.now(), text }]);
  };
  const completeTask = (id) => {
    const task = tasks.find((x) => x.id === id);
    if (!task) return;
    setTasks((t) => t.filter((x) => x.id !== id));
    setCompleted((c) => [task, ...c]);
  };

  // Timer

  const saveTimerData = (data) => {
    localStorage.setItem("timerData", JSON.stringify(data));
  };
  const loadTimerData = () => {
    const saved = localStorage.getItem("timerData");
    return saved ? JSON.parse(saved) : null;
  };
  const getTodayDate = () => {
    return new Date().toDateString();
  };
  useEffect(() => {
    const savedData = loadTimerData();
    const today = getTodayDate();

    if (savedData && savedData.date === today) {
      setTotalTimeToday(savedData.totalTimeToday || 0);
      setTimeLeft(savedData.timeLeft || 25 * 60);
      setIsRunning(savedData.isRunning || false);
    }
  }, []);

  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState("Ready to focus");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [totalTimeToday, setTotalTimeToday] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    if (!isRunning) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          setTotalTimeToday((t) => t + 1);
          return prev - 1;
        }
        clearInterval(timerRef.current);
        timerRef.current = null;
        setIsRunning(false);
        setStatus("Break time!");
        setTimeLeft(25 * 60);

        setTotalTimeToday((t) => {
          const newTotal = t + 1;

          saveTimerData({
            totalTimeToday: newTotal,
            timeLeft: 25 * 60,
            isRunning: false,
            date: getTodayDate(),
          });
          return newTotal;
        });
        return 25 * 60;
      });
    }, 1000); //every second

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setStatus("Focusing...");
    const dataToSave = {
      totalTimeToday,
      timeLeft,
      isRunning: true,
      date: getTodayDate(),
    };
    saveTimerData(dataToSave);
  };
  const handlePause = () => {
    setIsRunning(false);
    setStatus("Distracted? Take a deep breath and refocus.");
    const dataToSave = {
      totalTimeToday,
      timeLeft,
      isRunning: false,
      date: getTodayDate(),
    };
    saveTimerData(dataToSave);
  };
  const handleReset = () => {
    setIsRunning(false);
    setStatus("Ready to focus");
    setTimeLeft(25 * 60);
    const dataToSave = {
      totalTimeToday,
      timeLeft: 25 * 60,
      isRunning: false,
      date: getTodayDate(),
    };
    saveTimerData(dataToSave);
  };

  return (
    <>
      <div className="w-full h-full relative">
        <Timer
          isRunning={isRunning}
          timeLeft={timeLeft}
          handlePause={handlePause}
          handleReset={handleReset}
          handleStart={handleStart}
        />
        <Rank />
        <Done completed={completed} />
        <Tasks
          tasks={tasks}
          onComplete={completeTask}
          handleAddTask={handleAddTask}
          showTaskInput={showTaskInput}
          newTask={newTask}
          handleTaskInput={handleTaskInput}
          handleTaskKeyDown={handleTaskKeyDown}
        />
        <Total totalTimeToday={totalTimeToday} />
      </div>
    </>
  );
}

export default Pomodoro;
