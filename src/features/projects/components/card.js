import React from 'react'
import '../../../assets/css/card.css';

let articleContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis erat id felis porttitor,'+
 'et vestibulum dui euismod. Aenean in velit et urna mollis volutpat nec quis urna. Sed eu lorem nisl.'+
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'+
   'Quisque quis ligula vehicula, auctor metus tristique, eleifend velit. Duis ac magna magna.'+
    'Nulla sed commodo magna, et feugiat libero. Cras bibendum luctus justo. Nulla at suscipit neque.'

const Card = () => {
    return (
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="https://preview.redd.it/r19fc58otvn31.jpg?width=640&crop=smart&auto=webp&s=7956096bfcd6c77e7873f1728d9759869485c5fd" class="card-img" alt="Project One" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
      
      
      

export default Card