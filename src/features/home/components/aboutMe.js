import React from 'react'
import '../../../assets/css/aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

let articleContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis erat id felis porttitor,'+
 'et vestibulum dui euismod. Aenean in velit et urna mollis volutpat nec quis urna. Sed eu lorem nisl.'+
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'+
   'Quisque quis ligula vehicula, auctor metus tristique, eleifend velit. Duis ac magna magna.'+
    'Nulla sed commodo magna, et feugiat libero. Cras bibendum luctus justo. Nulla at suscipit neque.'

const AboutMe = () => {
    return (
    <section className='aboutMeSection mt-3'>
        <div className='pb-3 m-sm-1 row'>
            <div className='mb-1 mt-2'>
                <div className='tag slideLeft'>
                    <FontAwesomeIcon icon={faFolder} className='icon'/>
                    <span>Allen Gleeson</span>
                </div>
                <div className='tag slideRight'>
                    <FontAwesomeIcon icon={faFolder} className='icon'/>
                    <span>Full Stack Developer</span>
                </div>
                <div className='tag slideInFarRight'>
                    <FontAwesomeIcon icon={faFolder} className='icon'/>
                    <span>Ireland</span>
                </div>
            </div>
            
            <div className='col-sm-12 col-md-6 profileImg'>
                <img className='p-3' src='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd'/>
            </div>
            <div className='col-sm-12 col-md-6'>
                <div className='aboutMe h-100 p-3'>
                    <p className='p-3'>{articleContent}</p>
                    <hr />
                    <div>
                        <span className='tag'>GitHub</span>
                        <span className='tag'>LinkedIn</span>
                        <span className='tag'>CV</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
      
      
      

export default AboutMe