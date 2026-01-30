import '../../../assets/css/qualifications.css';
import qualifications from '../../../data/qualifications.json';

const QualificationCard = ({ qualification }) => {
    const logoPath = `${process.env.PUBLIC_URL}/data/images/logos/${qualification.fields.logo}`;

    return (
        <div className="qualification-card d-flex align-items-center gap-2 p-2 rounded mb-2">
                <div className="qualification-logo d-flex align-items-center justify-content-center rounded">
                <img
                    src={logoPath}
                    alt={`${qualification.fields.organisation} logo`}
                    className="w-100 h-100 qualification-logo-img"
                    onError={(e) => {
                        e.target.classList.add('d-none');
                        e.target.nextSibling.classList.remove('d-none');
                        e.target.nextSibling.classList.add('d-flex');
                    }}
                />
                <div className="logo-placeholder d-none align-items-center justify-content-center fw-bold">
                    {qualification.fields.organisation.charAt(0)}
                </div>
            </div>
            <div className="qualification-info flex-grow-1">
                <h6 className="qualification-name mb-1 fw-semibold">{qualification.fields.name}</h6>
                <p className="qualification-organisation mb-0 small">{qualification.fields.organisation}</p>
            </div>
        </div>
    );
};

const Qualifications = () => {
    return (
        <section className="p-2 my-3">
            <div className="qualifications-container">
                <div className="mb-4">
                    <h5 className="category-title mb-2">Diplomas</h5>
                    <div className="d-flex flex-column">
                        {qualifications.diplomas.map((diploma) => (
                            <QualificationCard key={diploma.pk} qualification={diploma} />
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <h5 className="category-title mb-2">Certificates</h5>
                    <div className="d-flex flex-column">
                        {qualifications.certificates.map((certificate) => (
                            <QualificationCard key={certificate.pk} qualification={certificate} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;