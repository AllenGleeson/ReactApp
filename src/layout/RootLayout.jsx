import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function RootLayout({ isDarkMode, toggleDarkMode }) {
  const { pathname } = useLocation();

  // Links don't reload the page, so reset scroll on each page change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="root-layout">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
