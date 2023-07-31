import React from 'react';
import Card from './card';
import '../../../assets/css/card.css';
import projects from '../../../data/projects.json';

const Cards = () => {
    return(
        <section className='cards justify-content-center'>
          <h3 className='text-center tag'>Other Code:</h3>
          <div className='row'>
              {projects.map((project, index) => (
                  <Card
                  key={index}
                  index={index}
                  title={project.fields.title}
                  description={project.fields.overviewDescription}
                  technologies={project.fields.technologies}
                  image={project.fields.overviewImage}
                  />
              ))}
          </div>
        </section>
    );
}
      

export default Cards