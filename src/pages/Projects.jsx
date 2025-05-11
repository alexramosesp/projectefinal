import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
    const { t } = useTranslation();

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>{t("projects.title")}</h1>
            <p>{t("projects.intro")}</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={t(project.titleKey)}
                        description={t(project.descriptionKey)}
                        repo={project.repo}
                        demo={project.demo}
                        image={project.image}
                        tech={project.tech}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default Projects;
