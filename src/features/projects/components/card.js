import React from 'react'
import '../../../assets/css/card.css';

let articleContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis erat id felis porttitor,'+
 'et vestibulum dui euismod. Aenean in velit et urna mollis volutpat nec quis urna. Sed eu lorem nisl.'+
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'+
   'Quisque quis ligula vehicula, auctor metus tristique, eleifend velit. Duis ac magna magna.'+
    'Nulla sed commodo magna, et feugiat libero. Cras bibendum luctus justo. Nulla at suscipit neque.'

const Card = ({ index, title, description, technologies }) => {
    const isEven = (index+1) % 2 === 0;
    const cardClassName = `mb-3 col-sm-10 col-md-4 p-2 ${isEven ? "offset-md-2" : "offset-md-1"}`;

    return (
        <div className={cardClassName}>
            <div class="card">
                <div class="row no-gutters">
                    <div class="col-md-4 p-0">
                        <img src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd" class="card-img" alt="Project One" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
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
        </div>
        
    )
}
      
      
      

export default Card