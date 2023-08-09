import React from 'react'
import '../../../assets/css/aboutMe.css';

let articleContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis erat id felis porttitor,'+
 'et vestibulum dui euismod. Aenean in velit et urna mollis volutpat nec quis urna. Sed eu lorem nisl.'+
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'+
   'Quisque quis ligula vehicula, auctor metus tristique, eleifend velit. Duis ac magna magna.'+
    'Nulla sed commodo magna, et feugiat libero. Cras bibendum luctus justo. Nulla at suscipit neque.'

const AboutMe = () => {
    return (
    <section className='aboutMeSection mt-3'>
        <div className='rounded-1 dark-bg'>
            <div className='pb-3 m-sm-1 row'>
                <div className='defaultCursor mb-1 mt-2 slideLeft'>
                    <div className='links text-shadow'>
                        <span>Allen Gleeson</span>
                    </div>
                    <div className='links text-shadow'>
                        <span>Full Stack Developer</span>
                    </div>
                    <div className='links text-shadow'>
                        <span>Ireland</span>
                    </div>
                </div>
                
                <div className='col-sm-12 col-md-6 profileImg'>
                    <div className='p-2'>
                        <img className='border border-5 border-light rounded-circle' src='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd'/>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div className='h-100 p-3'>
                        <div>
                            <p className='text-shadow'>{articleContent}</p>
                        </div>
                        
                        <hr />
                        <div className='mt-5'>
                            <a href='https://github.com/AllenGleeson'>
                                <span className='links text-shadow'>GitHub</span>
                            </a>
                            <a href='https://www.linkedin.com/in/allen-gleeson-a6263711a/'>
                                <span className='links text-shadow'>LinkedIn</span>
                            </a>
                            <a href='#'>
                                <span className='links text-shadow'>CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
      
      
      

export default AboutMe