import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <div>
            <h1>Mis Proyectos</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        repo={project.repo}
                        demo={project.demo}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
