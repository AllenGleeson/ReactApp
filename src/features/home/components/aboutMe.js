import React from 'react';
import '../../../assets/css/aboutMe.css';
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa';
import profileImage from '../../../assets/images/profile.jpg';

let articleContent = "I am a Full Stack Developer having completed several courses focused on programming and expanding my knowledge of different aspects of the development lifecycle. "+
"My courses have covered a diverse range of development languages, frameworks, and skills. "+
"\n \n"+
"I am now working with Orcawise in their Innovation Program as a Data Scienist to web scrape, using Python, websites depending on the data they need. Also getting to see use of NLP to get some insights about the data.";

const AboutMe = () => {
    return (
        <section className='aboutMeSection'>
            <div className='pb-3 m-sm-1 row'>
                <div className="col-md-5 col-sm-12 profileImg">
                    <div className='h-100 p-4'>
                        <img alt='Profile' className='h-100' src={profileImage}/>
                    </div>
                </div>
                <div className='col-sm-12 col-md-7'>
                    <div className='h-100 p-3'>
                        <div className='defaultCursor mb-1 mt-2 slideRight'>
                            <div className='tech_tag'>
                                <span>Allen Gleeson</span>
                            </div>
                            <div className='tech_tag'>
                                <span>Full Stack Developer</span>
                            </div>
                            <div className='tech_tag'>
                                <span>Ireland</span>
                            </div>
                        </div>
                        <div className='m-2 mt-4'>
                            <p className='aboutmeDescription' dangerouslySetInnerHTML={{ __html: articleContent.replace(/\n/g, '<br />') }}></p>
                        </div>

                        <hr />
                        <div className='mt-md-5 mt-sm-auto slideRight'>
                            <a href='https://github.com/AllenGleeson'>
                                <span className='links social-links'>GitHub <FaGithub /></span>
                            </a>
                            <a href='https://www.linkedin.com/in/allen-gleeson-a6263711a/'>
                                <span className='links social-links'>LinkedIn <FaLinkedin /></span>
                            </a>
                            <a href='#'>
                                <span className='links social-links'>CV <FaFile /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
