import React from 'react'
import '../css/AboutMe.css';

let articleContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis erat id felis porttitor,'+
 'et vestibulum dui euismod. Aenean in velit et urna mollis volutpat nec quis urna. Sed eu lorem nisl.'+
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'+
   'Quisque quis ligula vehicula, auctor metus tristique, eleifend velit. Duis ac magna magna.'+
    'Nulla sed commodo magna, et feugiat libero. Cras bibendum luctus justo. Nulla at suscipit neque.'

const Content = () => {
    return React.createElement('section', { className: 'about-me-section' },
        React.createElement('ul', { className: 'row text-center' },
            React.createElement('li', { className: 'col-4' }, 
                React.createElement('h3', null, 'Lorem Ipsum'),
                React.createElement('p', null, articleContent)
            ),
            React.createElement('li', { className: 'col-4' }, 
                React.createElement('h3', null, 'Lorem Ipsum'),
                React.createElement('p', null, articleContent)
            ),
            React.createElement('li', { className: 'col-4' }, 
                React.createElement('h3', null, 'Lorem Ipsum'),
                React.createElement('p', null, articleContent)
            )
        )
    );
}
      
      
      

export default Content