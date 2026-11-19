import { useState } from 'react';
import './Qualifications.css';
import qualifications from '../../data/qualifications.json';

const QualificationCard = ({ qualification }) => {
    const { name, organisation, logo } = qualification.fields;
    const [logoFailed, setLogoFailed] = useState(!logo);

    return (
        <li className="qualification">
            <div className="qualification-logo">
                {logoFailed ? (
                    <span className="qualification-logo-fallback">{organisation.charAt(0)}</span>
                ) : (
                    <img
                        src={`${import.meta.env.BASE_URL}data/images/logos/${logo}`}
                        alt={`${organisation} logo`}
                        onError={() => setLogoFailed(true)}
                    />
                )}
            </div>
            <div>
                <div className="qualification-name">{name}</div>
                <div className="qualification-org">{organisation}</div>
            </div>
        </li>
    );
};

const Group = ({ title, items }) => (
    <div className="skill-group">
        <h3 className="skill-group-title">{title}</h3>
        <ul className="qualification-list">
            {items.map((item) => (
                <QualificationCard key={item.pk} qualification={item} />
            ))}
        </ul>
    </div>
);

const Qualifications = () => {
    return (
        <div className="panel h-100">
            <Group title="Diplomas" items={qualifications.diplomas} />
            <Group title="Certificates" items={qualifications.certificates} />
        </div>
    );
};

export default Qualifications;
