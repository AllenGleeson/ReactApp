import React from 'react'
import { motion } from 'framer-motion';
import images from './images';
import '../css/FeaturedProjects.css';

const Shop = () => {
    return (
        <motion.div className='carousel'>
            <motion.div className='inner-carousel'>
                {images.map((image) => {
                    return(
                        <motion.div drag="x" dragConstraints={{ left: 0, right: 300 }} className='item'>
                            <img src={image}></img>
                            <aside>
                                <h2>Project</h2>
                                <a href='#'>GitHub</a>
                                <a href='#'>Live</a>
                                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                            </aside>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}
      
      
      

export default Shop