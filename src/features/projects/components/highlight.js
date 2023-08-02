import React from 'react'
import '../../../assets/css/project.css';


const Highlight = ({ index, title, description, image }) => {
    const isEven = index%2==0;
    const highlightClass = `mt-2 ${isEven ? "slideLeft dynamicTheme rounded-bottom-circle rounded-top-pill" : "text-light slideRight"}`;

    return (
        <div className='col-12'>
            <div className={highlightClass}>
            {(() => {
                if (isEven) {
                return (
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <div className='h-75 m-2 p-2 text-shadow'>
                                <div>
                                    <h1>{title}</h1>
                                    <hr />
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='m-3'>
                                <img className='border border-4 border-dark rounded w-100'src={image}alt='Project' />
                            </div>
                        </div>
                    </div>  
                )
                } else {
                return (
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <div className='m-3'>
                                <img className='border border-4 border-dark rounded w-100'src={image}alt='Project' />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='h-75 m-2 p-2 text-shadow'>
                                <div>
                                    <h1>{title}</h1>
                                    <hr />
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            })()}
            </div>
        </div>
    )
}
    
      
      

export default Highlight;