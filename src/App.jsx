import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import SEOPage from './pages/SEOPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import ClientPage from './pages/ClientPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop'; 

const App = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/Web-Development" element={<WebDevelopmentPage />} />
        <Route path="/services/SEO" element={<SEOPage />} />
        <Route path="/services/App-Development" element={<AppDevelopmentPage />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
