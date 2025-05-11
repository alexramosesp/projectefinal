import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../App.css';
import { motion } from "framer-motion";

function Accordion({ title, children, isOpen, onClick }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                marginBottom: "1rem",
                borderRadius: "8px",
                padding: "1rem",
            }}
        >
            <h2 onClick={onClick} style={{ cursor: "pointer" }}>
                {title} {isOpen ? "▲" : "▼"}
            </h2>
            {isOpen && <div>{children}</div>}
        </div>
    );
}

function Home() {
    const { t } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
                <h1 className="home-title">
                    {t("home.greeting")}
                </h1>
                <p className="home-subtitle">{t("home.intro")}</p>

                <div className="accordion">
                    <div className="accordion-header" onClick={() => handleAccordionClick(0)}>
                        {t("home.aboutTitle")} {activeIndex === 0 ? "▲" : "▼"}
                    </div>
                    {activeIndex === 0 && (
                        <div className="accordion-content">
                            <p>{t("home.aboutPreview")}</p>
                            <p className="profile-note">{t("home.aboutExtra")}</p>
                            <button className="accordion-button" onClick={() => navigate(`/${lang}/about`)}>
                                {t("home.aboutBtn")}
                            </button>
                        </div>
                    )}
                </div>

                <div className="accordion">
                    <div className="accordion-header" onClick={() => handleAccordionClick(1)}>
                        {t("home.projectsTitle")} {activeIndex === 1 ? "▲" : "▼"}
                    </div>
                    {activeIndex === 1 && (
                        <div className="accordion-content">
                            <p>{t("home.projectsPreview")}</p>
                            <p className="section-subtitle">{t("home.projectsIntroDetail")}</p>
                            <p><strong>{t("home.projectsHighlightTitle")}</strong></p>
                            <p>{t("home.projectsHighlightDescription")}</p>
                            <a href="https://github.com/RaulLunaAlcalde/Rutify" target="_blank" rel="noreferrer">
                                {t("home.projectsHighlightLink")}
                            </a>
                            <br />
                            <button className="accordion-button" onClick={() => navigate(`/${lang}/projects`)}>
                                {t("home.projectsBtn")}
                            </button>
                        </div>
                    )}
                </div>

                <div className="accordion">
                    <div className="accordion-header" onClick={() => handleAccordionClick(2)}>
                        {t("home.contactTitle")} {activeIndex === 2 ? "▲" : "▼"}
                    </div>
                    {activeIndex === 2 && (
                        <div className="accordion-content">
                            <p>{t("home.contactPreview")}</p>
                            <ul className="contact-list">
                                <li>{t("home.contactDetails.address")}</li>
                                <li>{t("home.contactDetails.phone")}</li>
                                <li>{t("home.contactDetails.email")}</li>
                                <li>{t("home.contactDetails.note")}</li>
                            </ul>
                            <button className="accordion-button" onClick={() => navigate(`/${lang}/contact`)}>
                                {t("home.contactBtn")}
                            </button>
                        </div>
                    )}
                </div>
        </motion.div>
    );
}

export default Home;
