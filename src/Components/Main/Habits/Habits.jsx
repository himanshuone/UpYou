import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Habits() {
  let habits = [
    "Habit 1",
    "Habit 2",
    "Habit 3",
    "Habit 4",
    "Habit 5",
    "Habit 6",
    "Habit 7",
    "Habit 8",
    "Habit 9",
    "Habit 10",
    "Habit 11",
    "Habit 12",
    "Habit 13",
    "Habit 14",
    "Habit 15",
    "Habit 16",
    "Habit 17",
    "Habit 18",
    "Habit 19",
    "Habit 20",
  ];

  return (
    <>
      <div className=" flex  h-screen ">
        <div className="habits-container overflow-y-auto max-h-[80vh] flex flex-wrap m justify-center   ">
          {habits.map((habit, inx) => (
            <div
              key={inx}
              className="habit-item relative border-b-0 w-[20vw] h-[18vh] mx-9 my-8 bg-white rounded-lg inset-shadow-sm   flex  justify-center items-center hover:scale-105 transition-transform duration-300"
            >
              <button>
                <X
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  size={18}
                />
              </button>
              {habit}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Habits;
