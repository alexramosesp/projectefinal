import { useTranslation } from "react-i18next";
import { education } from "../data/education";
import { motion } from "framer-motion";
import "../App.css"; // Asegúrate de importar tu CSS nuevo

function About() {
    const { t } = useTranslation();

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>{t("about.title")}</h1>

            <div className="profile-highlight">
                🎯 {t("about.profileHighlight", "Apasionado por el desarrollo de software y el aprendizaje continuo. Disfruto trabajando en equipo, enfrentando retos técnicos y diseñando soluciones intuitivas.")}
            </div>

            <h2>{t("about.educationTitle")}</h2>
            <div className="education-list">
                {education.map((item, index) => (
                    <div className="edu-item" key={index}>
                        <div>
                            <strong>{t(item.institutionKey)}</strong><br />
                            {item.titleKey && <span>{t(item.titleKey)}</span>}
                        </div>
                        <span className="edu-date">{item.period}</span>
                    </div>
                ))}
            </div>


            <h2>{t("about.skillsTitle")}</h2>
            <ul className="skills-list">
                {t("about.skillsList", { returnObjects: true }).map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>

            <h2>{t("about.languagesTitle")}</h2>
            <ul>
                {t("about.languagesList", { returnObjects: true }).map((lang, index) => (
                    <li key={index}>{lang}</li>
                ))}
            </ul>
        </motion.div>
    );
}

export default About;
