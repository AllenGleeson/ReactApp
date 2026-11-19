import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div>
          <div className="site-footer-name">Allen Gleeson</div>
          <div className="site-footer-role">Software Engineer · Ireland</div>
        </div>
        <nav className="site-footer-links" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <a href="https://github.com/AllenGleeson" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/allen-gleeson" aria-label="LinkedIn"><FaLinkedin /></a>
        </nav>
      </div>
      <div className="container site-footer-copy">© {new Date().getFullYear()} Allen Gleeson</div>
    </footer>
  );
};

export default Footer;
