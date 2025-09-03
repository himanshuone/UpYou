import { X } from "lucide-react";
import React, { useState } from "react";

function Habits() {
  const [habits, setHabits] = useState(["habit1", "habit2", "habit3"]);
  function handleDeleteHabit(inx) {
    setHabits(habits.filter((_, index) => index !== inx))
  }

  return (
    <>
      <div className=" flex  h-screen ">
        <div className="habits-container overflow-y-auto max-h-[80vh] flex flex-wrap  justify-center   ">
          {habits.map((habit, inx) => (
            <div
              key={inx}
              className="habit-item relative border-b-0 w-[20vw] h-[18vh] mx-9 my-8 bg-white 
              rounded-lg inset-shadow-sm   flex  justify-center items-center hover:scale-105 transition-transform duration-300"
            >
              <button onClick={() => handleDeleteHabit(inx)}>
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
