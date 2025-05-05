import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n';

const LANGUAGES = ['en', 'es', 'ca'];

function LanguageValidator() {
    const { lang } = useParams();

    if (!LANGUAGES.includes(lang)) {
        return <Navigate to="/en/home" replace />;
    }

    return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/en/home" />} />
            <Route path="/:lang/*" element={<LanguageValidator />} />
        </Routes>
    </BrowserRouter>
);
