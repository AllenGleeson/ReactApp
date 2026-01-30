import { useState, useEffect } from 'react';
import Content from '../features/home/components/content';
import AboutMe from '../features/home/components/aboutMe';
import Timeline from '../features/home/components/timeline';
import Qualifications from '../features/home/components/qualifications';
import BackToTop from '../Components/backToTop';
import FeaturedProjects from '../features/projects/components/featuredProjects';
import InDevelopment from '../features/home/components/inDevelopment';
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

    return (
        <div>
            <AboutMe />
            <div className="row">
                <div className="col-12 col-md-6">
                    <Content technologies={technologies} />
                </div>
                <div className="col-12 col-md-6">
                    <Qualifications />
                </div>
            </div>
            <InDevelopment />
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