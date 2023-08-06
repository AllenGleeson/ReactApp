import React, { useState } from 'react';
import '../../../assets/css/project.css';

const Highlight = ({ index, title, description, image, mobileVersion, admin }) => {
    const [selectedView, setSelectedView] = useState('desktop');

    const isEven = index % 2 === 0;
    const highlightClass = `mt-3 mb-3 ${
        isEven === false
            ? 'slideLeft dynamicTheme rounded-bottom-circle rounded-top-pill'
            : 'alternateBg text-light slideRight'
    }`;

    // Event handler for the "Mobile Version" or "Admin View" button click
    const handleViewClick = (view) => {
        setSelectedView((prevView) => (prevView === view ? 'desktop' : view));
    };

    const getImagePath = () => {
        const baseImagePath = `${process.env.PUBLIC_URL}/data/images/`;
        const baseFolder = selectedView === 'admin' ? 'desktop' : selectedView;
        const isAdmin = selectedView === 'admin';
        const viewFolder = isAdmin ? 'admin' : 'users';
        return `${baseImagePath}${baseFolder}/${viewFolder}/${image}`;
    };   

    return (
        <div className='col-12'>
            <div className={highlightClass}>
                {image !== null ? (
                    <div className='row'>
                        {isEven ? (
                            // Render for even index
                            <>
                                <div className='col-sm-12 col-md-6'>
                                    <div className='m-3'>
                                        <img
                                            className='border border-4 border-dark rounded w-100'
                                            src={getImagePath()}
                                            alt='Project'
                                        />
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-6'>
                                    <div className='h-75 m-2 p-2 text-shadow'>
                                        <h1>{title}</h1>
                                        <hr />
                                        <p>{description}</p>
                                    </div>
                                    {(mobileVersion || admin) && (
                                        <div className='d-flex justify-content-end'>
                                            {mobileVersion && (
                                                <span onClick={() => handleViewClick('mobile')} className='pointerCursor techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded border border-dark-subtle'>
                                                    {selectedView === 'mobile'
                                                        ? 'Desktop Version'
                                                        : 'Mobile Version'}
                                                </span>
                                            )}
                                            {admin && (
                                                <span onClick={() => handleViewClick('admin')} className='pointerCursor techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded border border-dark-subtle'>
                                                    {selectedView === 'admin'
                                                        ? 'User View'
                                                        : 'Admin View'}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            // Render for odd index
                            <>
                                <div className='col-sm-12 col-md-6'>
                                    <div className='h-75 m-2 p-2 text-shadow'>
                                        <h1>{title}</h1>
                                        <hr />
                                        <p>{description}</p>
                                    </div>
                                    {(mobileVersion || admin) && (
                                        <div className='d-flex'>
                                            {mobileVersion && (
                                                <span onClick={() => handleViewClick('mobile')} className='pointerCursor techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded border border-dark-subtle'>
                                                    {selectedView === 'mobile'
                                                        ? 'Desktop Version'
                                                        : 'Mobile Version'}
                                                </span>
                                            )}
                                            {admin && (
                                                <span onClick={() => handleViewClick('admin')} className='pointerCursor techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded border border-dark-subtle'>
                                                    {selectedView === 'admin'
                                                        ? 'User View'
                                                        : 'Admin View'}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className='col-sm-12 col-md-6'>
                                    <div className='m-3'>
                                        <img
                                            className='border border-4 border-dark rounded w-100'
                                            src={getImagePath()}
                                            alt='Project'
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='mt-3 p-3 text-center'>
                                <h1>{title}</h1>
                                <hr />
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Highlight;
