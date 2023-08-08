import React from 'react';
import '../../../assets/css/project.css';
import Carousel from 'react-bootstrap/Carousel';

const EndDescription = ({descriptions, color}) => {
    const dynamicCarousel = `
        .carousel-control-prev-icon, .carousel-control-next-icon{
            background-color: ${color} !important;
        }
    `
    return(
        <div className='row'>
            <div className='col-12'>
                <style>{dynamicCarousel}</style>
                <Carousel>
                    {descriptions.titles.map((title, index) => (
                        <Carousel.Item key={index}>
                            <div className='align-items-center d-flex h-100 justify-content-center text-light text-shadow w-100'>
                                <div className='m-2 w-50 text-center'>
                                    <h1>{title}</h1>
                                    <hr />
                                    <p>{descriptions.descriptions[index]}</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
      

export default EndDescription




            