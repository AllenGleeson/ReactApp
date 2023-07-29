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
        <section className='container'>
            <div className='row'>
                <div className='col-12 row'>
                    <div className='col-6'>
                        <h1>{project.fields.title}</h1>
                        <p>{project.fields.overviewDescription}</p>
                    </div>
                    <div className='col-6'>
                        <img className='w-100' src='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd' />
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
                <div className='col-12 row'>
                    <div className='col-6'>
                        <img className='w-100' src='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd' />
                    </div>
                    <div className='col-6'>
                        <h1>{project.fields.title}</h1>
                        <p>{project.fields.overviewDescription}</p>
                    </div>
                </div>
                <div className='col-12 row'>
                    <div className='col-6'>
                        <h1>{project.fields.title}</h1>
                        <p>{project.fields.overviewDescription}</p>
                    </div>
                    <div className='col-6'>
                        <img className='w-100' src='https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd' />
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