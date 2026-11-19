import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';
import { overviewImageUrl, projectLinks, projectThemeVars } from './projectUtils';

const MAX_TAGS = 4;

const ProjectCard = ({ project }) => {
    const { title, shortDescription, overviewImage, technologies, date } = project.fields;
    const image = overviewImageUrl(overviewImage);
    const extraTags = technologies.length - MAX_TAGS;

    return (
        <article className="project-card" style={projectThemeVars(project)}>
            <div className="project-card-media">
                {image ? (
                    <img src={image} alt="" loading="lazy" />
                ) : (
                    <div className="project-card-placeholder" aria-hidden="true">{title.charAt(0)}</div>
                )}
            </div>
            <div className="project-card-body">
                <div className="project-card-meta">{date}</div>
                <h3 className="project-card-title">
                    <Link to={`/projects/${project.slug}`} className="stretched-link">{title}</Link>
                </h3>
                <p className="project-card-text">{shortDescription}</p>
                <ul className="tag-list project-card-tags">
                    {technologies.slice(0, MAX_TAGS).map((tech) => (
                        <li key={tech} className="tag">{tech}</li>
                    ))}
                    {extraTags > 0 && <li className="tag tag-more">+{extraTags}</li>}
                </ul>
                <div className="project-card-links">
                    {projectLinks(project).map(({ href, label }) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                            {/github/i.test(label) ? <FaGithub /> : <FaExternalLinkAlt />} {label}
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
