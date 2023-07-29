import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../../data/projects.json';

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Find the selected project based on the "id" parameter
        const selectedProject = projectsData.find((project) => project.pk === parseInt(id));
        setProject(selectedProject);
      }, [id]);
      
    if (!project) {
        return <div>2</div>;
      }

    return(
        <section>
            <div className='row'>
                <div className='col-12'>
                    <div className='col-6'>
                        <h1>{project.fields.title}</h1>
                        <p>{project.fields.description}</p>
                    </div>
                    <div className='col-6'>
                        <img className='w-100' src='' />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='m-sm-3 mt-2 p-1 rounded shadow techWrapper'>
                        <h4 className='tag'>Technologies:</h4>
                        <div className='techSkills'>
                            <span className='tag'>HTML</span>
                            <span className='tag'>CSS</span>
                            <span className='tag'>JS</span>
                            <span className='tag'>Python</span>
                            <span className='tag'>Java</span>
                            <span className='tag'>C#</span>
                            <span className='tag'>SQL</span>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='col-6'>
                        <h1>{project.fields.title}</h1>
                        <p>{project.fields.description}</p>
                    </div>
                    <div className='col-6'>
                        <img className='w-100' src='' />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='col-6'>
                        <img className='w-100' src='' />
                    </div>
                    <div className='col-6'>
                        <h1>{project.fields.title}</h1>
                        <p>{project.fields.description}</p>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='col-6'>
                        <h3>Challenge</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
      
      
      

export default Project;