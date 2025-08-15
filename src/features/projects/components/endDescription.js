import '../../../assets/css/project.css';
import Carousel from 'react-bootstrap/Carousel';

const EndDescription = ({ descriptions, color }) => {
    const dynamicCarousel = `
        .carousel-control-prev-icon, .carousel-control-next-icon{
            background-color: ${color} !important;
        }
    `
    return (
        <div className='row'>
            <div className='col-12'>
                <style>{dynamicCarousel}</style>
                <Carousel>
                    {descriptions.titles.map((title, index) => (
                        <Carousel.Item key={index}>
                            <div className='h-100'>
                                <div className='case-study d-flex flex-column h-100 justify-content-center text-center'>
                                    <h1 className='project-heading-border'>{title}</h1>
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