import React from 'react'
import '../../../assets/css/aboutMe.css';

let articleContent = "I am a junior developer having completed several courses focused on programming and expanding my knowledge of different aspects of the development lifecycle."+
"My courses have covered a diverse range of development languages, frameworks, and skills. "+
"My early courses were in the backend with Java and C# and learning the Spring Framework. I continually did courses in any area of the Full Stack I felt weak in. The last few years I have been training up in Web Development."+
"If you "

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