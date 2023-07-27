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
    <section className='mt-3'>
        <div className='aboutMe m-sm-1 row'>
            <div>
                <div className='tag slideLeft'>
                    <FontAwesomeIcon icon={faFolder} className='icon'/>
                    <span>Allen Gleeson</span>
                </div>
                <div className='tag slideRight'>
                    <FontAwesomeIcon icon={faFolder} className='icon'/>
                    <span>Full Stack Developer</span>
                </div>
                <div className='tag slideRight'>
                    <FontAwesomeIcon icon={faFolder} className='icon'/>
                    <span>Ireland</span>
                </div>
            </div>
            <hr />
            <feature className='col-6 profileImg'>
                <img src='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd'/>
            </feature>
            <caption className='col-6'>
                <p>{articleContent}</p>
            </caption>
        </div>
    </section>
    );
}
      
      
      

export default AboutMe