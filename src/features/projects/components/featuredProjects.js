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
                <h3 className="tech_tag text-shadow defaultCursor m-sm-3 text-center">
                    Featured Projects
                </h3>
                <Carousel>
                    {featuredProjects.map((project, index) => (
                        <Carousel.Item key={index}>
                            <div className="h-100">
                                <a href={`projects/${project.pk}`}>
                                    <img className="rounded" src={`${process.env.PUBLIC_URL}/data/images/overview/${project.fields.overviewImage}`} alt={project.fields.title} />
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
        </section>
    );
}

export default FeaturedProjects;
