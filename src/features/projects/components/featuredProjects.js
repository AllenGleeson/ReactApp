import React,{ useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../../assets/css/featuredProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

const FeaturedProjects = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <section className="featuredProjects mt-2">
            <h2 className="text-center tag hoverWhite m-sm-3 defaultCursor">Featured Projects</h2>
            <Carousel className="rounded m-sm-3">
                <Carousel.Item className="rounded-2 p-1">
                    <img src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd"/>
                    <div onClick={toggleCollapse} className="featuredProjectDescription hoverWhite">
                        <span>Project 1</span>
                        <FontAwesomeIcon icon={faFolder} beat size="lg" className='icon'/>
                        {!isCollapsed && 
                        <div>
                            <hr/>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </div>
                        }
                    </div>
                </Carousel.Item>
                <Carousel.Item className="rounded-2 p-1">
                    <img src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd"/>
                    <div onClick={toggleCollapse} className="featuredProjectDescription hoverWhite">
                        <span>Project 2</span>
                        <FontAwesomeIcon icon={faFolder} beat size="lg" className='icon'/>
                        {!isCollapsed && 
                        <div>
                            <hr/>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </div>
                        }
                    </div>
                </Carousel.Item>
                <Carousel.Item className="rounded-2 p-1">
                    <img src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd"/>
                    <div onClick={toggleCollapse} className="featuredProjectDescription hoverWhite">
                        <span>Project 3</span>
                        <FontAwesomeIcon icon={faFolder} beat size="lg" className='icon'/>
                        {!isCollapsed && 
                        <div>
                            <hr/>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </div>
                        }
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
      );
}

export default FeaturedProjects;