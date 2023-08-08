import AboutMe from '../../home/components/aboutMe';
import React, { useState, useEffect } from 'react';
import '../../../assets/css/temp.css';
import Cards from './cards';
import BackToTop from '../../../components/backToTop';
import FeaturedProjects from './featuredProjects';

function Temp() {
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
            <FeaturedProjects />
            <h4 className='tag text-shadow'>Scroll for more</h4>
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



export default Temp