import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../App.css';

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
        <div className="home-container">
            <h1 className="home-title">
                {t("home.greeting")} <span>👋</span>
            </h1>
            <p className="home-subtitle">{t("home.intro")}</p>

            <div className="accordion">
                <div className="accordion-header" onClick={() => handleAccordionClick(0)}>
                    {t("home.aboutTitle")} {activeIndex === 0 ? "▲" : "▼"}
                </div>
                {activeIndex === 0 && (
                    <div className="accordion-content">
                        <p>{t("home.aboutPreview")}</p>
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
                        <button className="accordion-button" onClick={() => navigate(`/${lang}/contact`)}>
                            {t("home.contactBtn")}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
