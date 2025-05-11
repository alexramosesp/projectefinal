import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

function ProjectCard({ title, description, repo, demo, image, tech }) {
    const { t } = useTranslation();

    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />

            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>

                {tech && (
                    <p className="project-tech">
                        <strong>{t("projects.technologies")}:</strong> {tech.join(" · ")}
                    </p>
                )}

                <div className="project-links">
                    {repo && (
                        <a href={repo} target="_blank" rel="noreferrer">
                            {t("projects.repository")}
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" rel="noreferrer">
                            {t("projects.demo")}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
