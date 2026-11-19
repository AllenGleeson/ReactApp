import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './FeaturedProjects.css';
import projects from '../../data/projects.json';
import { overviewImageUrl } from './projectUtils';

const featured = projects.filter((project) => project.fields.featured);

const FeaturedProjects = () => {
    return (
        <section className="section" aria-labelledby="featured-heading">
            <div className="section-header-row">
                <h2 id="featured-heading" className="section-heading">Featured Projects</h2>
                <Link to="/projects" className="section-header-link">All projects →</Link>
            </div>
            <Carousel className="featured-carousel" interval={6000} pause="hover">
                {featured.map((project) => (
                    <Carousel.Item key={project.slug}>
                        <Link to={`/projects/${project.slug}`} className="featured-slide">
                            <img
                                src={overviewImageUrl(project.fields.overviewImage)}
                                alt={`${project.fields.title} screenshot`}
                            />
                            <div className="featured-caption">
                                <h3>{project.fields.title}</h3>
                                <p>{project.fields.shortDescription}</p>
                                <span className="featured-cta">View project →</span>
                            </div>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default FeaturedProjects;
