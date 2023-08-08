import React, { useState } from 'react';
import '../../../assets/css/project.css';

const Highlight = ({ index, title, description, image, mobileVersion, admin }) => {
    const [selectedView, setSelectedView] = useState('desktop');
    const [showMobileVersion, setShowMobileVersion] = useState(false);
    const [showAdminView, setShowAdminView] = useState(false);

    const isEven = index % 2 === 0;
    const highlightClass = `mt-3 mb-3 ${
        isEven === false
            ? 'slideLeft dynamicTheme rounded-bottom-circle rounded-top-pill'
            : 'alternateBg text-light slideRight'
    }`;

    // Event handler for the "Mobile Version" or "Admin View" button click
    const handleViewClick = (view) => {
        setSelectedView((prevView) => {
            if (prevView === view) {
                // If clicking the same view again, switch to "Desktop Version"
                return 'desktop';
            } else {
                // If clicking a different view, switch to the clicked view
                return view;
            }
        });
    };

    // Event handler for the "Mobile Version" button click
    const handleMobileVersionClick = () => {
        setShowMobileVersion((prevValue) => !prevValue);
    };

    // Event handler for the "Admin View" button click
    const handleAdminViewClick = () => {
        setShowAdminView((prevValue) => !prevValue);
    };

    const getImagePath = () => {
        const baseImagePath = `${process.env.PUBLIC_URL}/data/images/`;
        const viewFolder = showAdminView ? 'admin' : 'users';
        const view = showMobileVersion ? 'mobile' : 'desktop';
        return `${baseImagePath}${view}/${viewFolder}/${image}`;
    };

    return (
        <div className='col-12'>
            <div className={highlightClass}>
                {image !== null ? (
                    <div className='row'>
                        {isEven ? (
                            // Render for even index (Image on the left)
                            <>
                                <div className='col-sm-12 col-md-5'>
                                    <div className='m-3'>
                                        <img
                                            className='min-height border border-4 border-dark rounded w-100'
                                            src={getImagePath()}
                                            alt='Project'
                                        />
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-7'>
                                    <div className='h-75 m-2 p-2 text-shadow'>
                                        <h1>{title}</h1>
                                        <hr />
                                        <p>{description}</p>
                                    </div>
                                    {(mobileVersion || admin) && (
                                        <div className='d-flex justify-content-end'>
                                            {mobileVersion && (
                                                <span onClick={handleMobileVersionClick} className='pointerCursor techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded border border-dark-subtle'>
                                                    {showMobileVersion
                                                        ? 'Desktop Version'
                                                        : 'Mobile Version'}
                                                </span>
                                            )}
                                            {admin && (
                                                <span onClick={handleAdminViewClick} className='pointerCursor techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded border border-dark-subtle'>
                                                    {showAdminView
                                                        ? 'User View'
                                                        : 'Admin View'}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            // Render for odd index (Image on the right)
                            <>
                                <div className='col-sm-12 col-md-7'>
                                    <div className='h-75 m-2 p-2 text-shadow'>
                                        <h1>{title}</h1>
                                        <hr />
                                        <p>{description}</p>
                                    </div>
                                    {(mobileVersion || admin) && (
                                        <div className='d-flex'>
                                            {mobileVersion && (
                                                <span onClick={handleMobileVersionClick} className='pointerCursor techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded border border-dark-subtle'>
                                                    {showMobileVersion
                                                        ? 'Desktop Version'
                                                        : 'Mobile Version'}
                                                </span>
                                            )}
                                            {admin && (
                                                <span onClick={handleAdminViewClick} className='pointerCursor techTheme dynamicHover text-shadow-light-small p-1 m-2 rounded border border-dark-subtle'>
                                                    {showAdminView
                                                        ? 'User View'
                                                        : 'Admin View'}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className='col-sm-12 col-md-5'>
                                    <div className='m-3'>
                                        <img
                                            className='min-height border border-4 border-dark rounded w-100'
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
