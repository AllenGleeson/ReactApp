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
            <h2 className="text-shadow defaultCursor hoverWhite m-sm-3 tag text-center">Featured Projects</h2>
            <Carousel className="rounded m-sm-3 border border-2 border-dark">
                <Carousel.Item className="rounded-2">
                    <a href="/projects/1">
                        <img className="rounded-2" src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd"/>
                    </a>
                    <div onClick={toggleCollapse} className="border border-2 border-black featuredProjectDescription text-shadow-light hoverWhite rounded rounded-2">
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
                <Carousel.Item className="rounded-2">
                <   a href="/projects/2">
                        <img className="rounded-2" src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd"/>
                    </a>
                    <div onClick={toggleCollapse} className="border border-2 border-black featuredProjectDescription text-shadow-light hoverWhite rounded rounded-2">
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
                <Carousel.Item className="rounded-2">
                    <a href="/projects/3">
                        <img className="rounded-2" src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd"/>
                    </a>
                    <div onClick={toggleCollapse} className="border border-2 border-black featuredProjectDescription text-shadow-light hoverWhite rounded rounded-2">
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