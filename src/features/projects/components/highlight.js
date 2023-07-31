import React from 'react'
import '../../../assets/css/project.css';


const Highlight = ({ index, title, description, image }) => {
    const isEven = index%2==0;
    const highlightClass = `mt-2 p-1 rounded shadow ${isEven ? "slideLeft dynamicTheme" : "slideRight normalTheme"}`;

    return (
        <div className='col-12'>
            <div className={highlightClass}>
            {(() => {
                if (isEven) {
                return (
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <div className='border border-3 border-light m-3 p-3 rounded-1 text-shadow-light normalThemePrime'>
                                <h1>{title}</h1>
                                <hr />
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='m-2'>
                                <img className='border border-3 border-dark rounded w-100'src={image}alt='Project' />
                            </div>
                        </div>
                    </div>  
                )
                } else {
                return (
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <div className='m-2'>
                                <img className='border border-3 border-dark rounded w-100'src={image}alt='Project' />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='border border-3 border-light m-3 p-3 rounded-1 text-shadow-light normalThemePrime'>
                                <h1>{title}</h1>
                                <hr />
                                <p>{description}</p>
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