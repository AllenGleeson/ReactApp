import AboutMe from '../../home/components/aboutMe';
import React, { useState, useEffect } from 'react';
import '../../../assets/css/temp.css';
import Cards from './cards';
import BackToTop from '../../../components/backToTop';

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
            <h1>Scroll down to trigger component:</h1>
            <AboutMe />
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