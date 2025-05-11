import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const locale = i18n.language;

    const redirectToLanguage = (lang) => {
        const pathParts = location.pathname.split("/").filter(Boolean);
        pathParts[0] = lang;
        navigate("/" + pathParts.join("/"));
        setIsOpen(false); // 👈 cierra el menú hamburguesa
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Alex Ramos</div>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </div>

                <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
                    <li><Link to={`/${locale}/home`} onClick={() => setIsOpen(false)}>{t("home.home")}</Link></li>
                    <li><Link to={`/${locale}/about`} onClick={() => setIsOpen(false)}>{t("home.aboutTitle")}</Link></li>
                    <li><Link to={`/${locale}/projects`} onClick={() => setIsOpen(false)}>{t("home.projectsTitle")}</Link></li>
                    <li><Link to={`/${locale}/contact`} onClick={() => setIsOpen(false)}>{t("home.contactTitle")}</Link></li>
                    <li className="language-switcher">
                        <button onClick={() => redirectToLanguage("es")}>ES</button>
                        <button onClick={() => redirectToLanguage("en")}>EN</button>
                        <button onClick={() => redirectToLanguage("ca")}>CA</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
