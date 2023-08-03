import React from 'react';
import '../../../assets/css/project.css';
import Carousel from 'react-bootstrap/Carousel';

const EndDescription = () => {
    return(
        <div className='row'>
            <div className='col-12'>
                <Carousel>
                    <Carousel.Item>
                        <div className='align-items-center d-flex h-100 justify-content-center text-light w-100'>
                            <div className='m-2 w-50 text-center'>
                                <h4>Challenge</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='align-items-center d-flex h-100 justify-content-center text-light w-100'>
                            <div className='m-2 w-50 text-center'>
                                <h4>Solution</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='align-items-center d-flex h-100 justify-content-center text-light w-100'>
                            <div className='m-2 w-50 text-center'>
                                <h4>Thoughts</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
      

export default EndDescription




            