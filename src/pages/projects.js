import { useState, useEffect } from 'react';
import '../assets/css/projects.css';
import Cards from '../features/projects/components/cards';
import BackToTop from '../Components/backToTop';
import FeaturedProjects from '../features/projects/components/featuredProjects';

function Projects() {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 20) {
        setShowComponent(true);
        } else {
        setShowComponent(false);
        }
    };

    return (
        <div className='align-content-center d-flex flex-column justify-content-center projects'>
            <FeaturedProjects />
            <h4>Scroll for more</h4>
            <div className={`fade ${showComponent ? 'show' : 'hide'}`}>
                {showComponent && (
                <div>
                    <Cards />
                    <BackToTop />
                </div>
                )}
            </div>
        </div>
    );
}



export default Projects