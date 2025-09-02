import React from "react";

function Tasks({
  tasks,
  onComplete,
  handleAddTask,
  showTaskInput,
  newTask,
  handleTaskInput,
  handleTaskKeyDown,
}) {
  return (
    <>
      <div className="w-[50%]  bg-white h-[75%] rounded-2xl border-0  border-teal-800 p-5  shadow-2xl absolute top-0 right-0 ">
        <div className="flex items-center ">
          <span className="font-bold text-teal-800"> Tasks</span>

          <button
            className="mt-4 bg-teal-800 rounded-full w-5 h-8 absolute top-0 right-8 text-white flex items-center justify-center "
            onClick={handleAddTask}
          >
            +
          </button>
        </div>

        <div className="mt-8 h-[90%] overflow-y-auto">
          {showTaskInput && (
            <li className="list-none border-s-0 rounded-lg px-5 py-4 m-4 bg-gray-100 flex justify-center items-center">
              <input
                id="1"
                type="text"
                placeholder="Add a new task..."
                className="w-full bg-transparent outline-none"
                value={newTask}
                onChange={handleTaskInput}
                onKeyDown={handleTaskKeyDown}
                autoFocus
              />
            </li>
          )}
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-none border-s-0 rounded-lg px-5 py-4 m-4 bg-gray-100  flex justify-between items-center"
            >
              <span> {task.text}</span>
              <button
                className=""
                onClick={() => {
                  onComplete(task.id);
                }}
              >
                &times;
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
export default Tasks;
