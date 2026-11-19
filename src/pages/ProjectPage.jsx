import { Link, useParams } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import projectsData from '../data/projects.json';
import './ProjectPage.css';
import Highlight from '../features/projects/Highlight';
import VimeoPlayer from '../features/projects/VimeoPlayer';
import ProjectSummary from '../features/projects/ProjectSummary';
import DeviceViewer from '../components/DeviceViewer';
import { liveSiteUrl, overviewImageUrl, projectLinks, projectThemeVars } from '../features/projects/projectUtils';

const ProjectNav = ({ index }) => {
    const prev = projectsData[index - 1];
    const next = projectsData[index + 1];

    return (
        <nav className="project-pager" aria-label="More projects">
            {prev ? (
                <Link to={`/projects/${prev.slug}`} className="project-pager-link">
                    <span>← Previous</span>
                    <strong>{prev.fields.title}</strong>
                </Link>
            ) : <span />}
            {next && (
                <Link to={`/projects/${next.slug}`} className="project-pager-link is-next">
                    <span>Next →</span>
                    <strong>{next.fields.title}</strong>
                </Link>
            )}
        </nav>
    );
};

const ProjectPage = () => {
    const { slug } = useParams();
    const index = projectsData.findIndex((p) => p.slug === slug);
    const project = projectsData[index];

    if (!project) {
        return (
            <section className="section">
                <h1 className="section-heading">Project not found.</h1>
                <p><Link to="/projects">Back to all projects</Link></p>
            </section>
        );
    }

    const { fields } = project;
    const highlights = fields.fields ?? {};
    const overviewImage = overviewImageUrl(fields.overviewImage);
    const liveSite = liveSiteUrl(project);

    return (
        <article className="project-page" style={projectThemeVars(project)}>
            <Link to="/projects" className="back-link"><FaArrowLeft /> All projects</Link>

            <header className={`project-hero${overviewImage ? '' : ' no-image'}`}>
                <div className="project-hero-text">
                    <p className="project-date">{fields.date}</p>
                    <h1 className="project-title">{fields.title}</h1>
                    <p className="project-summary">{fields.overviewDescription}</p>
                    <div className="btn-row">
                        {projectLinks(project).map(({ href, label }) => (
                            <a key={href} href={href} className="btn-project" target="_blank" rel="noopener noreferrer">
                                {/github/i.test(label) ? <FaGithub /> : <FaExternalLinkAlt />} {label}
                            </a>
                        ))}
                    </div>
                    {fields.coauthors && (
                        <p className="project-coauthors">
                            Co-author:{' '}
                            {fields.coauthors.link.map((href, i) => (
                                <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                                    {fields.coauthors.author[i]}
                                </a>
                            ))}
                        </p>
                    )}
                </div>
                {overviewImage && (
                    <div className="project-hero-image">
                        <img src={overviewImage} alt={`${fields.title} overview`} />
                    </div>
                )}
            </header>

            <section className="project-section">
                <div className="row g-4">
                    {fields.vimeoID && (
                        <div className="col-12 col-lg-8">
                            <VimeoPlayer vimeoID={fields.vimeoID} />
                        </div>
                    )}
                    <div className={fields.vimeoID ? 'col-12 col-lg-4' : 'col-12'}>
                        <div className="panel">
                            <h2 className="project-subheading">Technologies</h2>
                            <ul className="tag-list">
                                {fields.technologies.map((tech) => (
                                    <li key={tech} className="tag">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {fields.mobileVersion && liveSite && (
                <section className="project-section">
                    <h2 className="section-heading">Live Preview</h2>
                    <DeviceViewer site={liveSite} title={fields.title} initialDevice="mobile" />
                </section>
            )}

            {highlights.sectionTitle?.length > 0 && (
                <section className="project-section">
                    <h2 className="section-heading">Highlights</h2>
                    <div className="highlight-grid">
                        {highlights.sectionTitle.map((title, i) => (
                            <Highlight
                                key={title}
                                index={i}
                                title={title}
                                description={highlights.descriptions?.[i]}
                            />
                        ))}
                    </div>
                </section>
            )}

            {fields.endDescriptions && (
                <section className="project-section">
                    <ProjectSummary descriptions={fields.endDescriptions} />
                </section>
            )}

            <ProjectNav index={index} />
        </article>
    );
};

export default ProjectPage;
