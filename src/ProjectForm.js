import React, { useState } from 'react';

const ProjectForm = ({ onProjectSubmit }) => {
    const [projectName, setProjectName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (projectName.trim() !== '') {
            onProjectSubmit(projectName);
            setProjectName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter project name"
            />
            <button type="submit">Create Project</button>
        </form>
    );
};

export default ProjectForm;
