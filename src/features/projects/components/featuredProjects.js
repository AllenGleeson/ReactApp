import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../../assets/css/featuredProjects.css';
import projects from '../../../data/projects.json';
import { FaInfoCircle } from 'react-icons/fa';

const FeaturedProjects = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    const featuredProjects = projects.filter(project => project.fields.featured);

    return (
        <section className="mt-2">
            <h3 className="section-heading tech_tag defaultCursor m-sm-3 text-center">
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
                                className={`featuredProjectDescription ${isCollapsed ? '' : 'expanded'}`}
                            >
                                <div>
                                    <span>{project.fields.title}</span>
                                    <FaInfoCircle className="featureIcon" />
                                </div>
                                {!isCollapsed &&
                                    <div>
                                        <hr />
                                        <p className="featuredDescription">
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