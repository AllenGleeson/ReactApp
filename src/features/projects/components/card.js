import React from 'react'
import '../../../assets/css/card.css';


const Card = ({ index, title, description, technologies, image}) => {
    const isEven = index%2==0;
    const cardClass = `border border-bottom-0 border-end-0 card container tr-border-radius shadow-lg ${isEven ? "slideLeft" : "slideRight"}`;
    const projectLink = '/projects/'+(index+1);

    return (
        <div className="mb-3 col-sm-10 col-md-5 p-2 offset-md-1">
            <div className={cardClass}>
                <a href={projectLink} className="row">
                    <div class="col-md-4 p-0">
                        <img src={image} className="card-img" alt="Project One" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body tr-border-radius">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            {technologies.map((tech, index) => (
                                <span key={index} className="tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </a>
            </div>
            {index % 1 === 0 ? (
            <div className="col-12 d-sm-none mb-5">
                <hr />
            </div>
            ) : null}
            {index % 2 === 0 ? (
            <div className="col-12 d-none d-sm-block d-md-block d-lg-none mb-5">
                <hr />
            </div>
            ) : null}
        </div>
        
    )
}
      
      
      

export default Card