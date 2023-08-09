import React from 'react'
import '../../../assets/css/aboutMe.css';


const Content = ({technologies}) => {
    return (
        <section className='row'>
            <div className='col-12'>
                <div className='m-sm-3 mt-2 rounded techWrapper defaultCursor'>
                    <div className='dark-bg p-2'>
                        <h3 className='links text-shadow'>Technologies</h3>
                        <div className='tech'>
                            {technologies.map((tech, index) => (
                                <span key={index} className='links text-shadow'>
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
      
      
      

export default Content