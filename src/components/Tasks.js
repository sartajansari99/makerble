import React, { useState } from "react";
import "./Styles/Task.css";
import Navbar from "./Navbar";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Handle adding a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { text: task, isCompleted: false }]);
      setTask("");
    }
  };

  // Handle toggling task completion
  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTasks(updatedTasks);
  };

  // Handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar />
      <div className="todo-container">
        <h2>Write your tasks</h2>

        {/* Task Input */}
        <form className="task-input-form" onSubmit={handleAddTask}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            required
          />
          <button type="submit">Add Task</button>
        </form>

        {/* Task List */}
        <ul className="task-list">
          {tasks.length === 0 ? (
            <p>No tasks added yet.</p>
          ) : (
            tasks.map((t, index) => (
              <li key={index} className={t.isCompleted ? "completed-task" : ""}>
                <span onClick={() => handleToggleComplete(index)}>
                  {t.isCompleted ? "✅" : "⬜"} {t.text}
                </span>
                <button onClick={() => handleDeleteTask(index)}>❌</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default Todo;
