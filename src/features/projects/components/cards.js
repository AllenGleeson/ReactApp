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
                  <React.Fragment key={index}>
                    {project.fields.featured ? (
                      // Render elements when project is featured
                      <></>
                    ) : (
                      // Render Card component for non-featured projects
                      <Card
                        index={index}
                        title={project.fields.title}
                        description={project.fields.shortDescription}
                        links={project.fields.links}
                        image={project.fields.overviewImage}
                      />
                    )}
                  </React.Fragment>
              ))}
          </div>
        </section>
    );
}
      

export default Cards