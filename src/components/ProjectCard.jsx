import React from "react";

const ProjectCard = ({ title, description, repo, demo, image }) => {
    return (
        <div className="project-card">
            <img src={image} alt={`Imagen de ${title}`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
                <a href={repo} target="_blank" rel="noopener noreferrer">Repositorio</a>
                <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </div>
    );
};

export default ProjectCard;
