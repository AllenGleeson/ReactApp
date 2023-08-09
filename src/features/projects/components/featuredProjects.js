import React,{ useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../../assets/css/featuredProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import projects from '../../../data/projects.json';

const FeaturedProjects = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const featuredProjects = projects.filter(project => project.fields.featured);

    return (
        <section className="featuredProjects mt-2">
            <h3 className="text-shadow defaultCursor hoverWhite m-sm-3 tag text-center">Featured Projects</h3>
            <Carousel>
                {featuredProjects.map((project, index) => (
                    <Carousel.Item key={index}>
                        <div className="h-100 rounded border border-black">
                            <a href={`projects/${project.pk}`}>
                                <img className="rounded" src={project.fields.overviewImage}/>
                            </a>
                            <div onClick={toggleCollapse} className="border border-2 border-black featuredProjectDescription text-shadow text-light hoverWhite rounded">
                                <span>{project.fields.title}</span>
                                <FontAwesomeIcon icon={faFolder} beat size="lg" className='icon'/>
                                {!isCollapsed && 
                                <div>
                                    <hr/>
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