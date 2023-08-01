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
                            <div className='border border-4 borderThemeColor h-75 m-2 p-2 rounded-1 normalThemePrime text-shadow-light'>
                                <div className='dark-bg h-100 p-2 rounded'>
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
                            <div className='border border-4 borderThemeColor h-75 m-2 p-2 rounded-1 normalThemePrime text-shadow-light'>
                                <div className='dark-bg h-100 p-2 rounded'>
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