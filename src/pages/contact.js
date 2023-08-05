import React,{ useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import '../assets/css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import BackToTop from '../components/backToTop';

const Contact = () => {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 20) {
        setShowComponent(true);
        } else {
        setShowComponent(false);
        }
    };

    return(
        <section className='p-sm-5 mb-2'>
            <div className='contactSection'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 pt-3'>
                        <div className='border border-2 border-black contactForm p-sm-3 shadow-lg slideLeft'>
                            <h1 className='m-4'>Please get in touch:</h1>
                            <hr />
                            <Form>
                                <Form.Group className='m-2'>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" placeholder="eg. John Smith" />
                                </Form.Group>
                                <Form.Group className='m-2'>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" placeholder="eg. johnsmith@gmail.com" />
                                </Form.Group>
                                <Form.Group className='m-2'>
                                    <Form.Label>Your Message:</Form.Label>
                                    <Form.Control as="textarea" placeholder="Your Message" />
                                </Form.Group>
                                <div className='contactSubmit border border-dark m-2 shadow tag' type="submit">SUBMIT</div>
                            </Form>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 pt-3'>
                        <div className='border border-3 d-flex h-100 justify-content-center p-sm-3 personalLinks shadow-lg slideRight'>
                            <div className='align-center d-flex flex-column justify-content-center'>
                                <a className='m-2 p-2 tag text-decoration-none' href='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd'>
                                    <FontAwesomeIcon icon={faFolder} className='icon contactIcon'/>
                                    <span>GitHub</span>
                                </a>
                                <a className='m-2 p-2 tag text-decoration-none' href='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd'>
                                    <FontAwesomeIcon icon={faFolder} className='icon contactIcon'/>
                                    <span>LinkedIn</span>
                                </a>
                                <a className='m-2 p-2 tag text-decoration-none' href='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd'>
                                    <FontAwesomeIcon icon={faFolder} className='icon contactIcon'/>
                                    <span>CV</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`fade ${showComponent ? 'show' : 'hide'}`}>
                {showComponent && (<BackToTop />)}
            </div>
        </section>
    );
}
      
      
      

export default Contact