import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../../data/projects.json';
import '../../../assets/css/project.css'
import Highlight from './highlight';
import EndDescription from './endDescription'
import BackToTop from '../../../components/backToTop';
import MobileViewer from './mobileViewer';

const Project = () => {
    const { id } = useParams();
    var [project, setProject] = useState(null);

    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 20) {
        setShowComponent(true);
        } else {
        setShowComponent(false);
        }
    };

    useEffect(() => {
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
      .techTheme:hover {
        background: radial-gradient(#fff,${project.fields.colorTheme[0]}) !important;
      }
    `;
    
    const overviewImagePath = `${process.env.PUBLIC_URL}/data/images/overview/${project.fields.overviewImage}`;
    
    return(
        <section className='container'>
            <style>{dynamicStyles}</style>
            <div className='row'>
                <div className='col-12'>
                    <div className='mt-4 dynamicTheme rounded-bottom-pill rounded-top-circle'>
                        <div className='row'>
                            <div className="col-sm-12">
                                <div className='h-75 m-2 p-2 text-shadow'>
                                    <div>
                                        <h1 className='text-center'>{project.fields.title}</h1>
                                        <hr />
                                        <p>{project.fields.overviewDescription}</p>
                                        <span>Created - {project.fields.date}</span>
                                    </div>
                                </div>
                                <div className='m-2 mt-3 p-1'>
                                    <div className='h-100 p-2'>
                                        {project.fields.links.link.map((link, index) => (
                                            <a key={index} href={link} className="border border-2 borderThemeColor d-inline techTheme dynamicHover text-shadow m-2 p-1 rounded text-decoration-none">
                                                <span>
                                                    {project.fields.links.linkName[index]}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {project.fields.overviewImage && (
                                <div className="col-sm-12 p-0">
                                    <img src={overviewImagePath} className="card-img" alt="Project One" />
                                </div>
                            )}
                            
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='m-sm-3 mt-2 p-1 techSkills defaultCursor'>
                        <h4 className='d-inline-block tech_tag dynamicHover text-shadow-light-small'>Technologies</h4>
                        <div className='techSkillsList'>
                            {project.fields.technologies.map((tech, index) => (
                                <span key={index} className='tech_tag dynamicHover text-shadow-light-small'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                {project.fields.mobileVersion && (
                    <MobileViewer site={project.fields.links.link[1]} />
                )}
                {project.fields.fields.sectionTitle.map((title, index) => (
                    <Highlight key={index} title={title} description={project.fields.fields.descriptions[index]} image={project.fields.fields.images[index]} mobileVersion={project.fields.mobileVersion} admin={project.fields.fields.admin[index]} index={index} />
                ))}
                <EndDescription descriptions={project.fields.endDescriptions} color={project.fields.colorTheme[0]} />
                <div className={`fade ${showComponent ? 'show' : 'hide'}`}>
                    {showComponent && (
                    <div>
                        <BackToTop />
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
}
      
      
      

export default Project;