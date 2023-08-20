import React from 'react'
import '../../../assets/css/card.css';

const Card = ({ index, title, description, links, image }) => {
    const isEven = index % 2 === 0;
    const cardClass = `border border-bottom-0 border-end-0 card container tr-border-radius shadow-lg ${isEven ? "slideLeft" : "slideRight"}`;
    const projectLink = '/projects/' + (index + 1);
    const overviewImagePath = `${process.env.PUBLIC_URL}/data/images/overview/${image}`;

    return (
        <div className="mb-3 col-sm-10 col-md-5 p-2 offset-md-1">
            <div className={cardClass}>
                <a href={projectLink} className="row">
                    {image && (
                        <div className="col-sm-12 col-md-4 p-0">
                            <img src={overviewImagePath} className="card-img" alt="Project One" />
                        </div>
                    )}
                    <div className={image ? "col-sm-12 col-md-8" : "col-sm-12"}>
                        <div className="card-body tr-border-radius text-shadow">
                            <h5 className="card-title">{title}</h5>
                            <hr />
                            <p className="card-text">{description}</p>
                            {links.link.map((link, index) => (
                                <a key={index} href={link} className="links border border-black">{links.linkName[index]}</a>
                            ))}
                        </div>
                    </div>
                </a>
            </div>
            {index % 1 === 0 && (
                <div className="col-12 d-sm-none mb-5">
                    <hr />
                </div>
            )}
            {index % 2 === 0 && (
                <div className="col-12 d-none d-sm-block d-md-block d-lg-none mb-5">
                    <hr />
                </div>
            )}
        </div>
    )
}

export default Card
