import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
      setIsModalOpen(false); // Close modal after adding task
    }
  };

  const markAsCompleted = (index) => {
    const completedTask = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, completedTask]);
  };

  const markAsIncomplete = (index) => {
    const incompleteTask = completedTasks[index];
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
    setTasks([...tasks, incompleteTask]);
  };

  return (
    <div className="p-6 bg-white rounded-xl py-5 flex flex-col items-center">
      {/* Add Task Button */}
      <div className="w-full text-center mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 w-full bg-[#F3F4F6] text-[#7e8088] font-semibold py-1 px-4  mx-auto"
        >
          <span className="text-3xl relative bottom-[2px]">+</span>
          <span className="text-lg">Add Task</span>
        </button>
      </div>

      {/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 shadow-lg max-w-md w-full relative rounded-lg">
      {/* Close Icon */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Modal Content */}
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Add a New Task
      </h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        className="w-full p-3 border mb-4 outline-none focus:ring-2 focus:ring-gray-600"
      />
      <div className="flex justify-end">
        <button
          onClick={addTask}
          className="bg-[#1677FF] text-white py-2 px-4 rounded-md w-full hover:bg-[#3d87ef]"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
)}


      {/* Task Lists */}
      <div className="flex flex-wrap w-full max-w-4xl gap-6">
        {/* Incomplete Tasks */}
        <div className="flex-1 bg-[#F3F4F6] p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Incomplete Tasks
          </h2>
          <ul>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded-lg mb-2 hover:bg-gray-100"
                >
                  <span>{task}</span>
                  <button
                    onClick={() => markAsCompleted(index)}
                    className="text-green-600 hover:text-green-800"
                  >
                    Complete
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No incomplete tasks</p>
            )}
          </ul>
        </div>

        {/* Completed Tasks */}
        <div className="flex-1 bg-[#F3F4F6] p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Completed Tasks
          </h2>
          <ul>
            {completedTasks.length > 0 ? (
              completedTasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded-lg mb-2 hover:bg-gray-100"
                >
                  <span>{task}</span>
                  <button
                    onClick={() => markAsIncomplete(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Undo
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No completed tasks</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
