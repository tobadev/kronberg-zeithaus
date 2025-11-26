import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Collection } from './pages/Collection';
import { Contact } from './pages/Contact';
import { WatchDetail } from './pages/WatchDetail';
import { Impressum } from './pages/Impressum';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="watches" element={<Collection />} />
          <Route path="watches/:id" element={<WatchDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="cookies" element={<CookiePolicy />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;