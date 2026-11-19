import AboutMe from '../features/home/AboutMe';
import FeaturedProjects from '../features/projects/FeaturedProjects';
import InDevelopment from '../features/home/InDevelopment';
import Timeline from '../features/home/Timeline';
import Skills from '../features/home/Skills';
import Qualifications from '../features/home/Qualifications';
import technologies from '../data/technologies.json';

const HomePage = () => {
    return (
        <>
            <AboutMe />
            <FeaturedProjects />
            <InDevelopment />
            <Timeline />
            <section className="section" aria-labelledby="skills-heading">
                <h2 id="skills-heading" className="section-heading">Skills &amp; Qualifications</h2>
                <div className="row g-4">
                    <div className="col-12 col-lg-6">
                        <Skills technologies={technologies} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <Qualifications />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
