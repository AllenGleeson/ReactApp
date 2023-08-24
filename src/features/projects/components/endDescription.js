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
                            <div className='text-center text-light text-shadow'>
                                <div className='m-2'>
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




            