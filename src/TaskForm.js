import React, { useState } from 'react';

const TaskForm = ({ projectId, onTaskSubmit }) => {
    const [taskName, setTaskName] = useState('');
    const [timeSpent, setTimeSpent] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '' && timeSpent.trim() !== '') {
            onTaskSubmit(projectId, taskName, timeSpent, description);
            setTaskName('');
            setTimeSpent('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
            />
            <input
                type="text"
                value={timeSpent}
                onChange={(e) => setTimeSpent(e.target.value)}
                placeholder="Enter time spent (Ex- 1.5 hours)"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter task description"
            />
            <button type="submit">Create Task</button>
        </form>
    );
};

export default TaskForm;
