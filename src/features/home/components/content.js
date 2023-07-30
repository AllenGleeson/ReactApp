import React from 'react'
import '../../../assets/css/aboutMe.css';


const Content = () => {
    return (
        <section className='row'>
            <div className='col-12'>
                <div className='m-sm-3 mt-2 p-1 rounded shadow techWrapper defaultCursor'>
                    <h4 className='tag'>Technologies:</h4>
                    <div className='tech'>
                        <span className='tag'>HTML</span>
                        <span className='tag'>CSS</span>
                        <span className='tag'>JS</span>
                        <span className='tag'>Python</span>
                        <span className='tag'>Java</span>
                        <span className='tag'>C#</span>
                        <span className='tag'>SQL</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
      
      
      

export default Content