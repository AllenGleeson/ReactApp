import React from 'react'
import '../../../assets/css/aboutMe.css';


const Content = ({technologies}) => {
    return (
        <section className='row'>
            <div className='col-12'>
                <div className='m-sm-3 mt-2 p-1 rounded shadow techWrapper defaultCursor'>
                    <h4 className='border border-2 border-light tag'>Technologies:</h4>
                    <div className='tech'>
                        {technologies.map((tech, index) => (
                            <span key={index} className='border border-2 border-light tag'>
                            {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
      
      
      

export default Content