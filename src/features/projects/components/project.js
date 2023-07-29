import React from 'react'


const Project = () => {
    const projects =
        {
            name: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."+""+
            "Morbi et ultricies lectus. Proin vel maximus est. Aliquam sollicitudin mauris quis mauris venenatis, a sagittis elit volutpat.",
            technologies: ["React", "JavaScript", "CSS"],
        }
    return(
        <section>
            <div className='row'>
                <div className='col-12'>
                    <div className='col-6'>
                        <h1>{projects.name}</h1>
                        <p>{projects.description}</p>
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
                        <h1>{projects.name}</h1>
                        <p>{projects.description}</p>
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
                        <h1>{projects.name}</h1>
                        <p>{projects.description}</p>
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