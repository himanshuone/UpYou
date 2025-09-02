import React from "react";

function Done({ completed }) {
  let count = 5;
  let done = ["task1", "task2", "task3", "task4", "task5"];
  return (
    <>
      <div className="w-[50%] ">
        <div className="text-center text-black font-extralight pt-8">
          Task Completed:{completed.length}
        </div>
        <div className="text-center text-black  pt-8 ">Tasks:</div>
        <div className="text-center pt-4 max-h-[33vh] overflow-y-auto">
          {completed.map((task) => (
            <li key={task.id} className="list-none text-black font-extralight ">
              {task.text}
              <hr className="m-2" />
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
export default Done;
