import React from 'react'



const Shop = () => {
    return React.createElement('section', { className: 'about-me-section' },
        React.createElement('div', { className: 'row' },
        React.createElement('div', { className: 'col-12 col-md-6' },
            React.createElement('img', { className: 'w-100', src: 'https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0', alt: 'Image description' })
        ),
        React.createElement('div', { className: 'col-12 col-md-6 position-relative about-me-content' },
            React.createElement('article', { className: 'text-dark text-center' },
            React.createElement('h2', null, 'Lorem Ipsum'),
            React.createElement('p', null, "articleContent")
            ),
            React.createElement('div', { className: 'bg-image' })
        )
        )
    );
}
      
      
      

export default Shop