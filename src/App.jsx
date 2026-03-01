/**
 * App.jsx — Root with React Router routes for all pages
 */
import { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Preloader from '@components/Preloader';
import Navbar    from '@components/Navbar';
import Footer    from '@components/Footer';

// Pages
import HomePage    from '@pages/HomePage';
import AboutPage   from '@pages/AboutPage';
import ServicesPage from '@pages/ServicesPage';
import ProjectsPage from '@pages/ProjectsPage';
import JoinPage    from '@pages/JoinPage';
import PartnerPage from '@pages/PartnerPage';
import ContactPage from '@pages/ContactPage';

export default function App() {
  const [navVisible,  setNavVisible]  = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [preloaderShown, setPreloaderShown] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handlePreloaderDone = useCallback(() => {
    setPreloaderShown(true);
    setNavVisible(true);
    setTimeout(() => setHeroVisible(true), 150);
  }, []);

  // On route change scroll to top
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  // On non-home pages, show nav immediately
  useEffect(() => {
    if (!isHome) { setNavVisible(true); setHeroVisible(true); }
  }, [isHome]);

  return (
    <>
      {/* Ambient blobs */}
      <div style={{ position:'fixed', inset:0, overflow:'hidden', pointerEvents:'none', zIndex:0 }}>
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="noise-overlay" />

      {/* Preloader only on first home visit */}
      {isHome && !preloaderShown && <Preloader onDone={handlePreloaderDone} />}

      <Navbar visible={navVisible} />

      <main style={{ position:'relative', zIndex:1, minHeight:'100vh' }}>
        <Routes>
          <Route path="/"        element={<HomePage heroVisible={heroVisible} />} />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/join"    element={<JoinPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
