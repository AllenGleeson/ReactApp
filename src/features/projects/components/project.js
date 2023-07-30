import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../../data/projects.json';
import '../../../assets/css/project.css'

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
        return <div>2</div>;
    }
    const dynamicStyles = `
      .dynamicTheme {
        background-color: ${project.fields.colorTheme[0]};
        color: ${project.fields.colorTheme[1]};
      }
    `;

    return(
        <section className='container'>
            <style>{dynamicStyles}</style>
            <div className='row'>
                <div className='col-12'>
                    <div className='dynamicTheme mt-2 p-1 rounded shadow'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='m-3'>
                                    <h1>{project.fields.title}</h1>
                                    <p>{project.fields.overviewDescription}</p>
                                    <span>Created: {project.fields.date}</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="m-2">
                                    <img class="border border-3 border-dark rounded w-100" src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='m-sm-3 mt-2 p-1 techSkills rounded shadow'>
                        <h4 className='d-inline-block dynamicTheme'>Technologies:</h4>
                        <div className='techSkillsList'>
                            <span className='dynamicTheme'>HTML</span>
                            <span className='dynamicTheme'>CSS</span>
                            <span className='dynamicTheme'>JS</span>
                            <span className='dynamicTheme'>Python</span>
                            <span className='dynamicTheme'>Java</span>
                            <span className='dynamicTheme'>C#</span>
                            <span className='dynamicTheme'>SQL</span>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='dynamicTheme mt-2 p-1 rounded shadow slideLeft'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='m-3'>
                                    <h1>{project.fields.fields.sectionTitle[0]}</h1>
                                    <hr />
                                    <p>{project.fields.fields.descriptions[0]}</p>
                                    <span>Created: {project.fields.date}</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="m-2">
                                    <img class="border border-3 border-dark rounded w-100" src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='normalTheme mt-2 p-1 rounded shadow slideRight'>
                        <div className='row'>
                            <div class="col-6">
                                <div class="m-2">
                                    <img class="border border-3 border-dark rounded w-100" src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd" />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='m-3'>
                                    <h1>{project.fields.fields.sectionTitle[1]}</h1>
                                    <hr />
                                    <p>{project.fields.fields.descriptions[1]}</p>
                                    <span>Created: {project.fields.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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