import React from 'react'
import '../../../assets/css/aboutMe.css';

let articleContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis erat id felis porttitor,'+
 'et vestibulum dui euismod. Aenean in velit et urna mollis volutpat nec quis urna. Sed eu lorem nisl.'+
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'+
   'Quisque quis ligula vehicula, auctor metus tristique, eleifend velit. Duis ac magna magna.'+
    'Nulla sed commodo magna, et feugiat libero. Cras bibendum luctus justo. Nulla at suscipit neque.'

const AboutMe = () => {
    return React.createElement('section', { className: 'about-me-section' },
        React.createElement('div', { className: 'row' },
        React.createElement('div', { className: 'col-12 col-md-6' },
            React.createElement('img', { className: 'w-100', src: 'https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0', alt: 'Image description' })
        ),
        React.createElement('div', { className: 'col-12 col-md-6 position-relative about-me-content' },
            React.createElement('article', { className: 'text-dark text-center' },
            React.createElement('h2', null, 'Lorem Ipsum'),
            React.createElement('p', null, articleContent)
            ),
            React.createElement('div', { className: 'bg-image' })
        )
        )
    );
}
      
      
      

export default AboutMe