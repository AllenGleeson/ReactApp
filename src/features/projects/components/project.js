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
        background: linear-gradient(90deg, ${project.fields.colorTheme[0]},#49494900);
      }
      .borderThemeColor{
        border-color: ${project.fields.colorTheme[1]} !important;
      }
      .project-tech{
        display: inline-block !important;
        padding: 4px 8px !important;
        margin: 8px !important;
        font-weight: 600 !important;
        border-left: 3px solid ${project.fields.colorTheme[0]} !important;
      }
      .techTheme{
        background-color: ${project.fields.colorTheme[0]};
        color: white;
        font-weight: 700;
      }
      .techTheme:hover {
        background: radial-gradient(#fff,${project.fields.colorTheme[0]}) !important;
      }
      .project-heading-border{
        border-bottom: 2px solid ${project.fields.colorTheme[0]};
        margin-bottom: 1rem;
        padding-bottom: 1rem;
      }
    `;
    
    const overviewImagePath = `${process.env.PUBLIC_URL}/data/images/overview/${project.fields.overviewImage}`;
    let descriptionClass = 'col-sm-12';

    if(project.fields.overviewImage){
        descriptionClass = 'col-lg-4 col-sm-12'
    }
    return(
        <section className='container'>
            <style>{dynamicStyles}</style>
            <div className='row'>
                <div className='col-12'>
                    <div className='row'>
                        <div className={descriptionClass}>
                            <div className='m-2 p-md-2 project-header'>
                                <div>
                                    <h1 className='mt-3 text-center project-heading-border'>{project.fields.title}</h1>
                                    <p>{project.fields.overviewDescription}</p>
                                    <span>Created - {project.fields.date}</span>
                                </div>
                            </div>
                            <div className='m-2 mt-3 p-md-1'>
                                <div className='h-100 p-md-2'>
                                    {project.fields.links.link.map((link, index) => (
                                        <a key={index} href={link} className="dynamicHover m-2 p-2 techTheme text-decoration-none">
                                            <span>
                                                {project.fields.links.linkName[index]}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {project.fields.overviewImage && (
                            <div className="col-lg-8 col-sm-12 p-0">
                                <img id='overview-image' src={overviewImagePath} className="card-img" alt="Project One" />
                            </div>
                        )}
                        
                    </div>
                </div>
                <div className='col-12'>
                    <div className='m-sm-3 mt-2 p-md-1 techSkills defaultCursor'>
                        <h4 className='d-inline-block project-tech dynamicHover text-shadow-light-small'>Technologies</h4>
                        <div className='techSkillsList'>
                            {project.fields.technologies.map((tech, index) => (
                                <span key={index} className='project-tech dynamicHover text-shadow-light-small'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                {project.fields.mobileVersion && (
                    <MobileViewer site={project.fields.links.link[1]} />
                )}
                {project.fields.fields.sectionTitle && (
                    project.fields.fields.sectionTitle.map((title, index) => (
                        <Highlight key={index} title={title} description={project.fields.fields.descriptions[index]} image={project.fields.fields.images[index]} mobileVersion={project.fields.mobileVersion} admin={project.fields.fields.admin[index]} index={index} />
                    ))
                )}
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