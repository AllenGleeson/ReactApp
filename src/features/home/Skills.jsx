import './Skills.css';

const Skills = ({ technologies }) => {
    return (
        <div className="panel h-100">
            {Object.entries(technologies).map(([category, items]) => (
                <div key={category} className="skill-group">
                    <h3 className="skill-group-title">{category}</h3>
                    <ul className="tag-list">
                        {items.map((tech) => (
                            <li key={tech} className="tag">{tech}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;
