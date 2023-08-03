import React from 'react'
import '../../../assets/css/project.css';


const Highlight = ({ index, title, description, image, mobileVersion }) => {
    const isEven = index%2==0;
    const highlightClass = `mt-2 ${isEven ? "slideLeft dynamicTheme rounded-bottom-circle rounded-top-pill" : "alternateBg text-light slideRight"}`;

    return (
        <div className='col-12'>
            <div className={highlightClass}>
            {(() => {
                if(image!==null) {
                    if(isEven){
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
                                    {mobileVersion ? (
                                    <div className="h-25">
                                        <a href='#' className='d-flex justify-content-start text-decoration-none'>
                                            <span className='techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded'>Mobile Version</span>
                                        </a>
                                    </div>
                                    ) : null}
                                </div>
                                <div className='col-sm-12 col-md-6'>
                                    <div className='m-3'>
                                        <img className='border border-4 border-dark rounded w-100'src={image}alt='Project' />
                                    </div>
                                </div>
                            </div>  
                        )
                    }
                    else{
                        return (
                            <div className='row'>
                                <div className='col-sm-12 col-md-6'>
                                    <div className='m-3'>
                                        <img className='border border-4 border-dark rounded w-100'src={image}alt='Project' />
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-6'>
                                    <div className='h-75 m-2 p-2 text-shadow'>
                                        <h1>{title}</h1>
                                        <hr />
                                        <p>{description}</p>
                                    </div>
                                    {mobileVersion ? (
                                    <div className="h-25">
                                        <a href='#' className='d-flex justify-content-end text-decoration-none'>
                                            <span className='techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded'>Mobile Version</span>
                                        </a>
                                    </div>
                                    ) : null}
                                </div>
                            </div>
                        )
                    }
                }
                else{
                    return (
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='mt-3 p-3 text-center'>
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