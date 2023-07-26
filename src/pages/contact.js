import React from 'react'
import Form from 'react-bootstrap/Form';
import '../assets/css/contact.css'

const Contact = () => {
    return(
        <section className='row'>
            <div className='col-sm-12 col-md-6 m-sm-5'>
                <div className='p-sm-3 shadow-lg contactForm'>
                    <h1 className='m-4'>Please get in touch:</h1>
                    <Form>
                        <Form.Group className='m-2'>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className='m-2'>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className='m-2'>
                            <Form.Label>Enter your age:</Form.Label>
                            <Form.Control as="textarea" placeholder="Your Message" />
                        </Form.Group>
                        <div className='contactSubmit border border-dark m-2 shadow tag' type="submit">SUBMIT</div>
                    </Form>
                </div>
            </div>
        </section>
    );
}
      
      
      

export default Contact