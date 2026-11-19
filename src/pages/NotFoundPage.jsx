import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <section className="section">
        <h1 className="section-heading">Page not found</h1>
        <p className="section-intro">The page you're looking for doesn't exist or has moved.</p>
        <div className="btn-row">
            <Link to="/" className="btn-accent">Go home</Link>
            <Link to="/projects" className="btn-outline-accent">View projects</Link>
        </div>
    </section>
);

export default NotFoundPage;
