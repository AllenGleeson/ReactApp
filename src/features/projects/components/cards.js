import React from 'react';
import Card from './card';
import '../../../assets/css/card.css';

const Cards = () => {
    const projects = [
        {
          name: "Project 1",
          description: "Description of Project 1",
          technologies: ["React", "JavaScript", "CSS"],
        },
        {
          name: "Project 2",
          description: "Description of Project 2",
          technologies: ["React", "Node.js", "Express"],
        },
        {
          name: "Project 3",
          description: "Description of Project 2",
          technologies: ["React", "Node.js", "Express"],
        },
        {
          name: "Project 4",
          description: "Description of Project 2",
          technologies: ["React", "Node.js", "Express"],
        },
        {
          name: "Project 5",
          description: "Description of Project 2",
          technologies: ["React", "Node.js", "Express"],
        },
        {
          name: "Project 6",
          description: "Description of Project 2",
          technologies: ["React", "Node.js", "Express"],
        }
      ];
    
    
    return(
        <section className='row cards justify-content-center'>
            {projects.map((project, index) => (
                <Card
                key={index}
                index={index}
                title={project.name}
                description={project.description}
                technologies={project.technologies}
                />
            ))}
        </section>
    );
}
      

export default Cards