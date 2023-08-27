import React from 'react'
import '../../../assets/css/card.css';

const Card = ({ index, title, description, links, image }) => {
    const cardClass = `card shadow-lg`;
    const projectLink = '/projects/' + (index + 1);
    const overviewImagePath = `${process.env.PUBLIC_URL}/data/images/overview/${image}`;

    return (
        <div className="mb-3 col-sm-10 col-md-5 p-2 offset-md-1">
            <div className={cardClass}>
                <a href={projectLink} className="row">
                    {image && (
                        <div className="col-sm-12 p-0">
                            <img src={overviewImagePath} className="card-img max-card" alt="Project One" />
                        </div>
                    )}
                    <div className="col-sm-12">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <hr />
                            <p className="card-text m-0">{description}</p>
                            {links.link.map((link, index) => (
                                <a key={index} href={link} className="links">{links.linkName[index]}</a>
                            ))}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card
