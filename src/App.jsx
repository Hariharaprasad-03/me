import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MobileNav from './components/MobileNav';

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('page-enter-active');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('page-enter');
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('page-enter-active');
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className={transitionStage}>
      <Routes location={displayLocation}>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-700 dark:text-gray-300 transition-colors duration-500">
        {/* Theme toggle - floating button */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-zinc-700/50 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Toggle theme"
          id="theme-toggle"
        >
          <span className="material-icons text-xl text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <AnimatedRoutes />
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
