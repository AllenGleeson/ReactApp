import { useState } from 'react';
import '../../../assets/css/device-viewer.css';
import '../../../assets/css/inDevelopment.css';
import inDevelopmentData from '../../../data/inDevelopment.json';
import DeviceViewer from '../../projects/components/DeviceViewer';

const InDevelopment = () => {
    const [selectedDevice, setSelectedDevice] = useState('desktop');
    const { title, siteUrl, githubUrl, description } = inDevelopmentData;
    const descriptionLines = Array.isArray(description) ? description : [description];

    return (
        <section className="in-development-section">
            <h2 className="in-development-heading">{title}</h2>
            <div className="row align-items-start">
                <div className="col-12 col-lg-8 order-2 order-lg-1">
                    <div className="device-selector mb-3">
                        <button
                            type="button"
                            className={`btn btn-outline-secondary btn-sm me-2 ${selectedDevice === 'mobile' ? 'active' : ''}`}
                            onClick={() => setSelectedDevice('mobile')}
                        >
                            MOBILE
                        </button>
                        <button
                            type="button"
                            className={`btn btn-outline-secondary btn-sm me-2 ${selectedDevice === 'tablet' ? 'active' : ''}`}
                            onClick={() => setSelectedDevice('tablet')}
                        >
                            TABLET
                        </button>
                        <button
                            type="button"
                            className={`btn btn-outline-secondary btn-sm ${selectedDevice === 'desktop' ? 'active' : ''}`}
                            onClick={() => setSelectedDevice('desktop')}
                        >
                            DESKTOP
                        </button>
                    </div>
                    <div className="device-viewer-container">
                        <DeviceViewer device={selectedDevice} site={siteUrl} />
                    </div>
                </div>
                <div className="col-12 col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                    <div className="in-development-description">
                        {descriptionLines.map((line, index) => (
                            <p key={index} className="in-development-text">{line}</p>
                        ))}
                        {githubUrl && (
                            <>
                                {' '}
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="links text-decoration-none"
                                >
                                    GitHub
                                </a>
                            </>
                        )}
                        <a
                            href={siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="links text-decoration-none"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InDevelopment;