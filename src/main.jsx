import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n'; // asegúrate de tener esto

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/es/home" />} />
            <Route path="/:lang/*" element={<App />} />
        </Routes>
    </BrowserRouter>
);
