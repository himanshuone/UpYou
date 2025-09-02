import React, { useEffect, useState, useRef } from "react";

function Timer({ isRunning, timeLeft, handlePause, handleReset, handleStart }) {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <>
      <div className="w-[50%] h-[40%] rounded-2xl border-0  border-teal-800 p-5">
        <div className="text-center text-black font-bold pt-10 text-6xl">
          {minutes}:{seconds}
        </div>
        <div className="flex items-center justify-center gap-4 pt-8">
          {!isRunning && (
            <button
              className=" text-white px-6 py-3 rounded-lg font-semibold shadow-md bg-[#3b5a51]"
              onClick={handleStart}
            >
              Start
            </button>
          )}
          {isRunning && (
            <button
              className=" text-white px-6 py-3 rounded-lg font-semibold shadow-md bg-[#3b5a51]"
              onClick={handlePause}
            >
              Pause
            </button>
          )}
          <button
            className=" text-white px-6 py-3 rounded-lg font-semibold shadow-md bg-gray-500"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="text-center text-black font-extralight pt-8">
          {status}
        </div>
      </div>
    </>
  );
}

export default Timer;
