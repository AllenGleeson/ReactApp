import './Highlight.css';

const Highlight = ({ index, title, description }) => {
    const number = String(index + 1).padStart(2, '0');

    return (
        <article className="highlight-card">
            <span className="highlight-number" aria-hidden="true">{number}</span>
            <h3 className="highlight-title">{title}</h3>
            <p className="highlight-text">{description}</p>
        </article>
    );
};

export default Highlight;
