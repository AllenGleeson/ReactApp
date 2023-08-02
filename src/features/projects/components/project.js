import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../../data/projects.json';
import '../../../assets/css/project.css'
import Highlight from './highlight';

const Project = () => {
    const { id } = useParams();
    var [project, setProject] = useState(null);

    //project = projectsData[0];

    useEffect(() => {
        // Find the selected project based on the "id" parameter
        const selectedProject = projectsData.find((project) => project.pk === parseInt(id));
        setProject(selectedProject);
      }, [id]);
    
    
    
    if (!project) {
        return <div>Error loading.</div>;
    }
    const dynamicStyles = `
      .dynamicTheme {
        background: linear-gradient(to top right, ${project.fields.colorTheme[1]}, ${project.fields.colorTheme[0]}) !important;
        color: white;
      }
      .borderThemeColor{
        border-color: ${project.fields.colorTheme[1]} !important;
      }

      .techTheme{
        background: radial-gradient(${project.fields.colorTheme[1]},${project.fields.colorTheme[0]}) !important;
        color: white;
      }
    `;
    
    

    return(
        <section className='container'>
            <style>{dynamicStyles}</style>
            <div className='row'>
                <div className='col-12'>
                    <div className='mt-2 dynamicTheme rounded-bottom-pill rounded-top-circle'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6'>
                            <div className='h-75 m-2 p-2 text-shadow'>
                                <div>
                                        <h1>{project.fields.title}</h1>
                                        <hr />
                                        <p>{project.fields.overviewDescription}</p>
                                        <span>Created: {project.fields.date}</span>
                                    </div>
                                </div>
                                <div className='m-2 mt-3 p-1'>
                                    <div className='h-100 p-2'>
                                        {project.fields.links.link.map((link, index) => (
                                            <a href={link} className="border border-2 borderThemeColor d-inline techTheme text-shadow m-2 p-1 rounded text-decoration-none">
                                                <span key={index}>
                                                    {project.fields.links.linkName[index]}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="m-2 p-2">
                                    <img className="border border-4 border-dark rounded w-100" src={project.fields.overviewImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='m-sm-3 mt-2 p-1 techSkills'>
                        <h4 className='d-inline-block techTheme text-shadow-light-small'>Technologies</h4>
                        <div className='techSkillsList'>
                            {project.fields.technologies.map((tech, index) => (
                                <span key={index} className='techTheme text-shadow-light-small'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                {project.fields.fields.sectionTitle.map((title, index) => (
                    <Highlight title={title} description={project.fields.fields.descriptions[index]} image={project.fields.fields.images[index]} mobileVersion={project.fields.mobileVersion} index={index} />
                ))}
                <div className='col-12 row'>
                    <div className='col-12'>
                        <h3 className='text-center'>Challenge</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                             desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
      
      
      

export default Project;