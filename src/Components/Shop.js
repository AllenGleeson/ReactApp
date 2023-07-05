import React from 'react'
import { motion } from 'framer-motion';
import images from './images';
import '../css/FeaturedProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faFaceKiss } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';



const Shop = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <motion.div className='carousel'>
            <motion.div className='inner-carousel'>
                {images.map((image) => {
                    return(
                        <motion.div drag="x" dragConstraints={{ left: 0, right: 300 }} className='item'>
                            <img src={image} />
                            <FontAwesomeIcon icon={isOpen ? faAddressBook : faFaceKiss} beat size="lg" onClick={toggleDropdown} className='test' />
                            {isOpen && (
                            <aside className='project-information'>
                                <h2>Project</h2>
                                <a href='#'>GitHub</a>
                                <a href='#'>Live</a>
                                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                            </aside>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}
      
// const Dropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleDropdown = () => {
//       setIsOpen(!isOpen);
//     };
  
//     return (
//       <div className="dropdown">
//         <div className="dropdown-toggle" onClick={toggleDropdown}>
//           <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
//         </div>
//         {isOpen && (
//           <div className="dropdown-content">
//             {/* Additional information goes here */}
//           </div>
//         )}
//       </div>
//     );
//   };      
      

export default Shop