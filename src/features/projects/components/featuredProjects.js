import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../../assets/css/featuredProjects.css';
import projects from '../../../data/projects.json';

const FeaturedProjects = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    const featuredProjects = projects.filter(project => project.fields.featured);

    return (
        <section className="mt-2">
            <div className="file-container">
                <h3 className="file-title text-shadow defaultCursor hoverWhite m-sm-3 tag text-center">
                    Featured Projects
                </h3>
                <Carousel>
                    {featuredProjects.map((project, index) => (
                        <Carousel.Item key={index}>
                            <div className="h-100 rounded border border-black">
                                <a href={`projects/${project.pk}`}>
                                    <img className="rounded" src={project.fields.overviewImage} alt={project.fields.title} />
                                </a>
                                <div
                                    onClick={toggleCollapse}
                                    className={`border border-2 border-black featuredProjectDescription text-shadow text-light hoverWhite rounded ${isCollapsed ? '' : 'expanded'}`}
                                >
                                    <span>{project.fields.title}</span>
                                    {!isCollapsed && 
                                    <div>
                                        <hr />
                                        <p>
                                            {project.fields.shortDescription}
                                        </p>
                                    </div>
                                    }
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default FeaturedProjects;
