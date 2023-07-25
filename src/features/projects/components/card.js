import React from 'react'
import '../../../assets/css/card.css';


const Card = ({ index, title, description, technologies }) => {
    const isEven = index%2==0;
    const cardClass = `border border-bottom-0 border-end-0 card container tr-border-radius shadow-lg ${isEven ? "slideLeft" : "slideRight"}`;

    return (
        <div className="mb-3 col-sm-10 col-md-5 p-2 offset-md-1">
            <div class={cardClass}>
                <div class="row">
                    <div class="col-md-4 p-0">
                        <img src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd" class="card-img" alt="Project One" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body tr-border-radius">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                            {technologies.map((tech, index) => (
                                <span key={index} className="tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
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