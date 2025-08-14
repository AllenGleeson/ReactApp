import React from 'react';
import '../../../assets/css/aboutMe.css';
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa';
import profileImage from '../../../assets/images/profile.webp';
import cv from '../../../assets/cv/Allen-Gleeson.pdf';

let articleContent = "I am a Full Stack Developer that has steadily been building my skills with several courses, work placements, an internship and work experience which covered a diverse range of stacks, languages, and frameworks as well as manual testing."+
"\n \n"+
"My goal is to always expand what I can do. Over the last year I completed some work with STC, have completed some courses to expand my knowledge of the cloud and built the ADIG Coffeeshop web app with a friend."+
"\n \n"+
"I am currently doing a Higher Diploma in Science in Computing with the National College of Ireland to improve my Java and other skills with a longer goal of doing a masters."+
"\n \n"+
"I have been using React, Python, and Java with work or my own projects most recently and am looking for another software role. Always learning so happy to learn new technologies for an interesting role.";

const AboutMe = () => {
    return (
        <section className='aboutMeSection'>
            <div className='pb-3 m-sm-1 row'>
                <div className="col-lg-4 col-sm-12 profileImg">
                    <div className='h-100 p-4'>
                        <img alt='Profile' className='h-100 rounded-pill' src={profileImage}/>
                    </div>
                </div>
                <div className='col-lg-8 col-sm-12'>
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
                            <a href='https://www.linkedin.com/in/allen-gleeson'>
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
