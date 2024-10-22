import React, { useState } from 'react';
import './Styles/Taskmanager.css'; // Custom styles for tasks

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Follow up call', completed: false },
        { id: 2, text: 'Contact the authority', completed: false },
        { id: 3, text: 'Book meeting', completed: false },
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="task-manager">
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
