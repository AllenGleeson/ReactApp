import React from 'react';
import '../../../assets/css/aboutMe.css';
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa';
import profileImage from '../../../assets/images/profile.webp';
import cv from '../../../assets/cv/AllenGCV.docx';

let articleContent = "I am a Full Stack Developer that has steadily been building my skills with several courses, work placements, an internship and work experience which covered a diverse range of stacks, languages, and frameworks as well as manual testing."+
"\n \n"+
"Over the last year I have completed some courses, did an internship with Orcawise, built this site and some work with STC. I'm currently working on some side prjects and trying to expand what I can do."+
"\n \n"+
"I have been using React, Python, and Java with work or my own projects most recently.";

const AboutMe = () => {
    return (
        <section className='aboutMeSection'>
            <div className='pb-3 m-sm-1 row'>
                <div className="col-lg-5 col-sm-12 profileImg">
                    <div className='h-100 p-4'>
                        <img alt='Profile' className='h-100' src={profileImage}/>
                    </div>
                </div>
                <div className='col-lg-7 col-sm-12'>
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
                            <a href={cv}>
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
