import { education } from "../data/education";

function About() {
    return (
        <div>
            <h1>Sobre mi</h1>
            <p>
                Apassionat de l’informàtica, em defineixo com una persona amb ganes
                d’aprendre contínuament i un treballador en equip.
            </p>

            <h2>Educació</h2>
            <ul>
                {education.map((item, index) => (
                    <li key={index}>
                        <strong>{item.institution}</strong><br />
                        {item.title && <span>{item.title} | </span>}
                        {item.period}
                    </li>
                ))}
            </ul>

            <h2>Habilitats tècniques</h2>
            <ul>
                <li>Java, Python, JavaScript, HTML i CSS</li>
                <li>Angular, Odoo</li>
                <li>Paquet Office</li>
                <li>Resolució de problemes</li>
            </ul>

            <h2>Idiomes</h2>
            <ul>
                <li>Català i Castellà – Natiu</li>
                <li>Anglès – Nivell Mitjà-Alt</li>
            </ul>
        </div>
    );
}

export default About;
