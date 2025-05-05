import { Link, useParams } from "react-router-dom";
import "../App.css";

function Navbar() {
    const { lang } = useParams();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Alex Ramos</div>
                <ul className="navbar-links">
                    <li><Link to={`/${lang}/home`}>Home</Link></li>
                    <li><Link to={`/${lang}/about`}>Sobre mí</Link></li>
                    <li><Link to={`/${lang}/projects`}>Proyectos</Link></li>
                    <li><Link to={`/${lang}/contact`}>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
