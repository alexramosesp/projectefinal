import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";

function App() {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (["es", "en", "ca"].includes(lang)) {
            i18n.changeLanguage(lang);
        }
    }, [lang]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
