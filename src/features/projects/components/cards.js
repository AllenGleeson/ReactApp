import React, { useState } from 'react';
import Card from './card';
import '../../../assets/css/card.css';
import projects from '../../../data/projects.json';

const Cards = () => {
    const itemsPerPage = 4; // Number of cards per page
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleProjects = projects.slice(startIndex, endIndex);

    return (
        <section className='cards justify-content-center'>
            <h3 className='tech_tag defaultCursor'>All Projects</h3>
            <div className='row grow'>
                {visibleProjects.map((project, index) => {
                    const cardIndex = startIndex + index; // Calculate the actual card index
                    return (
                        <Card
                            key={index}
                            index={cardIndex} // Use the calculated card index as the URL
                            title={project.fields.title}
                            description={project.fields.shortDescription}
                            links={project.fields.links}
                            image={project.fields.overviewImage}
                        />
                    );
                })}
            </div>


            <div className='paginator'>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={currentPage === i + 1 ? 'paginator_active links' : 'links'}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Cards;
