import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter, Routes, Route } from "react-router-dom";
import WomenSection from "./pages/WomenSection";
import KidsSection from "./pages/KidsSection";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/women" element={<WomenSection />} />
        <Route path="/kids" element={<KidsSection />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
