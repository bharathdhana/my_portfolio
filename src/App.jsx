import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './components/Contact';
import './index.css';

function MainContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <MainContent />
    </Router>
  );
}

export default App;
