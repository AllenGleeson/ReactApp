import '../../../assets/css/aboutMe.css';
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa';
import profileImage from '../../../assets/images/profile.webp';
import cv from '../../../assets/cv/Allen-Gleeson.pdf';

let articleContent = "I’m a Full Stack Developer with practical experience delivering secure, data-driven web applications using React, Django, .NET Core, and Spring. My background spans both frontend and backend development, supported by strong skills in Python, Java, JavaScript, and SQL." +
    "\n \n" +
    "I’m passionate about building clean, efficient systems and enjoy working across the full stack—from designing REST APIs to developing responsive user interfaces. I’ve developed and deployed several full-stack projects, including the ADIG Coffeeshop web app and Ellas Design e-commerce platform, leveraging AWS services such as S3 and RDS for scalable cloud integration." +
    "\n \n" +
    "I’m currently pursuing a Higher Diploma in Science in Computing at the National College of Ireland, where I’m strengthening my understanding of software architecture, distributed systems, and Java development, with the goal of progressing toward a master’s degree." +
    "\n \n" +
    "Outside of work and study, I’m continuing to build personal projects and explore modern frameworks like Next.js to expand my technical expertise. I’m currently seeking new software development opportunities where I can contribute to impactful products while continuing to grow as a developer.";

const AboutMe = () => {
    return (
        <section className='aboutMeSection'>
            <div className='pb-3 m-sm-1 row'>
                <div className="col-lg-4 col-sm-12 profileImg">
                    <div className='h-100 p-4'>
                        <img alt='Profile' className='h-100 rounded-pill' src={profileImage} />
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