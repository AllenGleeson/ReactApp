import React from 'react';
import '../../../assets/css/aboutMe.css';

let articleContent = "I am a Full Stack Developer having completed several courses focused on programming and expanding my knowledge of different aspects of the development lifecycle. "+
"My courses have covered a diverse range of development languages, frameworks, and skills. "+
"\n \n"+
"I am now working with Orcawise as a Data Scienist to web scrape, using Python, websites depending on the data they need. Also getting to see use of NLP to get some insights about the data.";

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
                        <div className='h-100 p-4'>
                            <img className='border border-5 border-light h-100 rounded-bottom-pill rounded-top-pill' src='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd'/>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='h-100 p-3'>
                            <div>
                                <p className='text-shadow aboutmeDescription' dangerouslySetInnerHTML={{ __html: articleContent.replace(/\n/g, '<br />') }}></p>
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

export default AboutMe;
