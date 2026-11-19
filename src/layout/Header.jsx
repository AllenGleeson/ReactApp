import { Link, NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const navClass = ({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`;

  return (
    <header className="site-header" id="nav">
      <div className="container site-header-inner">
        <Link to="/" className="brand" aria-label="Allen Gleeson, home">
          <span className="brand-name">Allen Gleeson</span>
          <span className="brand-role">Software Engineer</span>
        </Link>
        <nav className="site-nav" aria-label="Main">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/projects" className={navClass}>Projects</NavLink>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
