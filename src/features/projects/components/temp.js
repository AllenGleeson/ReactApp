import AboutMe from '../../home/components/aboutMe';
import React, { useState, useEffect } from 'react';
import Shop from './shop';
import '../../../assets/css/temp.css';
import Cards from './cards';

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
            <Cards />
            <h1>Scroll down to trigger component:</h1>
            <AboutMe />
            <div className={`fade ${showComponent ? 'show' : 'hide'}`}>
                {showComponent && <Shop />}
            </div>
        </div>
    );
}



export default Temp