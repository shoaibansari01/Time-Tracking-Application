import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import TaskForm from './TaskForm';

const TimeTrackingApp = () => {
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);

    const handleProjectSubmit = (projectName) => {
        const newProject = { id: Date.now(), name: projectName };
        setProjects([...projects, newProject]);
    };

    const handleTaskSubmit = (projectId, taskName, timeSpent, description) => {
        const newTask = {
            id: Date.now(),
            projectId,
            name: taskName,
            timeSpent,
            description,
        };
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h1>Time Tracking Application</h1>
            <ProjectForm onProjectSubmit={handleProjectSubmit} />
            <hr />
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <TaskForm projectId={project.id} onTaskSubmit={handleTaskSubmit} />
                    <ul>
                        {tasks
                            .filter((task) => task.projectId === project.id)
                            .map((task) => (
                                <li key={task.id}>
                                    <strong>{task.name}</strong> - {task.timeSpent} -{" "}
                                    {task.description}
                                </li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TimeTrackingApp;
