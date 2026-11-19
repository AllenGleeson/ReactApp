import './ProjectSummary.css';

const ProjectSummary = ({ descriptions }) => {
    const { titles = [], descriptions: texts = [] } = descriptions;

    return (
        <div className="row g-4">
            {titles.map((title, i) => (
                <div key={title} className="col-12 col-md-4">
                    <div className="panel h-100 end-panel">
                        <h2 className="project-subheading">{title}</h2>
                        <p>{texts[i]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectSummary;
