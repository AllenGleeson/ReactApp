import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './InDevelopment.css';
import inDevelopmentData from '../../data/inDevelopment.json';
import DeviceViewer from '../../components/DeviceViewer';

const InDevelopment = () => {
    const { title, siteUrl, githubUrl, description } = inDevelopmentData;
    const descriptionLines = Array.isArray(description) ? description : [description];

    return (
        <section className="section" aria-labelledby="in-development-heading">
            <h2 id="in-development-heading" className="section-heading">In Development</h2>
            <div className="row g-4 align-items-start">
                <div className="col-12 col-lg-4">
                    <div className="panel">
                        <span className="status-badge">Work in progress</span>
                        <h3 className="in-development-title">{title.replace(/^In Development\s*-\s*/i, '')}</h3>
                        {descriptionLines.map((line) => (
                            <p key={line} className="in-development-text">{line}</p>
                        ))}
                        <div className="btn-row mt-3">
                            <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="btn-accent">
                                <FaExternalLinkAlt /> Live demo
                            </a>
                            {githubUrl && (
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-accent">
                                    <FaGithub /> GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <DeviceViewer site={siteUrl} title={title} />
                </div>
            </div>
        </section>
    );
};

export default InDevelopment;
