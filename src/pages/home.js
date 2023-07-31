import React, { useState, useEffect } from 'react';
import Content from '../features/home/components/content';
import AboutMe from '../features/home/components/aboutMe';
import Timeline from '../features/home/components/timeline';
import BackToTop from '../components/backToTop';
import FeaturedProjects from '../features/projects/components/featuredProjects';
import technologies from '../data/technologies.json';

const Home = () => {
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

    return(
        <div>
            <AboutMe />
            <hr />
            <Content technologies={technologies[0].technologies} />
            <hr />
            <FeaturedProjects />
            <div className={`fade ${showComponent ? 'show' : 'hide'}`}>
                {showComponent && (
                <div>
                    <hr />
                    <Timeline />
                    <BackToTop />
                </div>
                )}
            </div>
        </div>
    );
}
      
      
      

export default Home