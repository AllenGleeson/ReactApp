import React from 'react';
import '../../../assets/css/aboutMe.css';
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa';
import profileImage from '../../../assets/images/profile.jpg';

let articleContent = "I am a Full Stack Developer having completed several courses focused on programming and expanding my knowledge of different aspects of the development lifecycle. "+
"My courses have covered a diverse range of development languages, frameworks, and skills. "+
"\n \n"+
"I am now working with Orcawise in thier Innovation Program as a Data Scienist to web scrape, using Python, websites depending on the data they need. Also getting to see use of NLP to get some insights about the data.";

const AboutMe = () => {
    return (
        <section className='aboutMeSection mt-3'>
            <div className='pb-3 m-sm-1 row'>
                <div className='col-sm-12 col-md-6 profileImg'>
                    <div className='h-100 p-4'>
                        <img className='border border-5 border-light h-100 rounded-circle' src={profileImage}/>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div className='h-100 p-3'>
                        <div className='defaultCursor mb-1 mt-2 slideRight'>
                            <div className='tech_tag text-shadow'>
                                <span>Allen Gleeson</span>
                            </div>
                            <div className='tech_tag text-shadow'>
                                <span>Full Stack Developer</span>
                            </div>
                            <div className='tech_tag text-shadow'>
                                <span>Ireland</span>
                            </div>
                        </div>
                        <div className='m-2'>
                            <p className='text-shadow aboutmeDescription' dangerouslySetInnerHTML={{ __html: articleContent.replace(/\n/g, '<br />') }}></p>
                        </div>

                        <hr />
                        <div className='mt-md-5 mt-sm-auto slideRight'>
                            <a href='https://github.com/AllenGleeson'>
                                <span className='social-links links text-shadow'>GitHub <FaGithub /></span>
                            </a>
                            <a href='https://www.linkedin.com/in/allen-gleeson-a6263711a/'>
                                <span className='social-links links text-shadow'>LinkedIn <FaLinkedin /></span>
                            </a>
                            <a href='#'>
                                <span className='social-links links text-shadow'>CV <FaFile /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
