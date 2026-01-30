import '../../../assets/css/aboutMe.css';

const Content = ({ technologies }) => {
    const categories = Object.keys(technologies);

    return (
        <section className='row'>
            <div className='col-12'>
                <div className='m-sm-3 mt-2 rounded techWrapper defaultCursor'>
                    <div className='p-2'>
                        {categories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className='mb-3'>
                                <h4 className='tech-category-title'>{category}</h4>
                                <div className='tech'>
                                    {technologies[category].map((tech, techIndex) => (
                                        <span key={techIndex} className='tech_tag'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content