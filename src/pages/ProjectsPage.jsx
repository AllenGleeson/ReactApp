import { useMemo, useState } from 'react';
import ProjectCard from '../features/projects/ProjectCard';
import './ProjectsPage.css';
import projects from '../data/projects.json';

// Too common to be useful as filters.
const GENERIC = new Set(['HTML', 'CSS']);
const MIN_PROJECTS_FOR_FILTER = 3;

function popularTechnologies() {
    const counts = new Map();
    for (const project of projects) {
        for (const tech of project.fields.technologies) {
            if (!GENERIC.has(tech)) counts.set(tech, (counts.get(tech) ?? 0) + 1);
        }
    }
    return [...counts]
        .filter(([, count]) => count >= MIN_PROJECTS_FOR_FILTER)
        .sort((a, b) => b[1] - a[1])
        .map(([tech]) => tech);
}

const ProjectsPage = () => {
    const [filter, setFilter] = useState(null);
    const filters = useMemo(popularTechnologies, []);
    const visible = filter
        ? projects.filter((p) => p.fields.technologies.includes(filter))
        : projects;

    return (
        <section className="section" aria-labelledby="projects-heading">
            <h1 id="projects-heading" className="section-heading">Projects</h1>
            <p className="section-intro">
                Web applications, APIs and tools I've built, from full-stack platforms to smaller experiments.
            </p>

            <div className="project-filter" role="group" aria-label="Filter by technology">
                <button
                    type="button"
                    className={`btn-outline-accent${filter === null ? ' is-active' : ''}`}
                    aria-pressed={filter === null}
                    onClick={() => setFilter(null)}
                >
                    All
                </button>
                {filters.map((tech) => (
                    <button
                        key={tech}
                        type="button"
                        className={`btn-outline-accent${filter === tech ? ' is-active' : ''}`}
                        aria-pressed={filter === tech}
                        onClick={() => setFilter(filter === tech ? null : tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            <p className="project-filter-count" aria-live="polite">
                Showing {visible.length} of {projects.length} projects
            </p>

            <div className="project-grid">
                {visible.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
