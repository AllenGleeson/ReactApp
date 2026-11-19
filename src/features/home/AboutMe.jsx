import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import './AboutMe.css';
import profileImage from '../../assets/images/profile.webp';
import cv from '../../assets/cv/Allen-Gleeson.pdf';

const bio = 'Software Engineer with experience maintaining and extending production web applications using Python, JavaScript, and React. Worked on internal tools, API integrations, and database-backed features in live systems. Also experienced with Java and Spring through academic projects. Recently completed a Higher Diploma in Science in Computing.';

const AboutMe = () => {
    return (
        <section className="section hero fade-in" aria-label="About me">
            <div className="hero-photo">
                <img src={profileImage} alt="Allen Gleeson" width="220" height="280" />
            </div>
            <div className="hero-body">
                <p className="hero-eyebrow">Hi, I'm</p>
                <h1 className="hero-name">Allen Gleeson</h1>
                <ul className="tag-list hero-tags">
                    <li className="tag">Software Engineer</li>
                    <li className="tag">Ireland</li>
                </ul>
                <p className="hero-bio">{bio}</p>
                <div className="btn-row">
                    <Link to="/projects" className="btn-accent">View projects</Link>
                    <a href="https://github.com/AllenGleeson" className="btn-outline-accent">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/allen-gleeson" className="btn-outline-accent">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href={cv} className="btn-outline-accent" target="_blank" rel="noopener noreferrer">
                        <FaFileAlt /> CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
