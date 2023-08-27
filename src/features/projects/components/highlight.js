import React, { useState } from 'react';
import '../../../assets/css/project.css';

const Highlight = ({ index, title, description, image, mobileVersion, admin }) => {
    const [showMobileVersion, setShowMobileVersion] = useState(false);
    const [showAdminView, setShowAdminView] = useState(false);

    const isEven = index % 2 === 0;
    const highlightClass = `mt-3 mb-3 ${
        isEven === false
            ? 'slideLeft p-md-3 p-sm-0'
            : 'alternateBg dynamicTheme mb-3 mt-3 p-md-3 p-sm-0 slideRight'
    }`;

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
                                <div className='col-sm-12 col-md-6 col-lg-5'>
                                    <div className='m-md-3 m-sm-0'>
                                        <img
                                            className='min-height w-100'
                                            src={getImagePath()}
                                            alt='Project'
                                        />
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-7'>
                                    <div className='highlight-text m-2 p-md-2 project-header'>
                                        <h1 className='text-center project-heading-border'>{title}</h1>
                                        <p>{description}</p>
                                    </div>
                                    {(mobileVersion || admin) && (
                                        <div className='d-flex justify-content-end'>
                                            {mobileVersion && (
                                                <span onClick={handleMobileVersionClick} className='pointerCursor dynamicHover m-2 p-2 techTheme text-decoration-none'>
                                                    {showMobileVersion
                                                        ? 'Desktop Version'
                                                        : 'Mobile Version'}
                                                </span>
                                            )}
                                            {admin && (
                                                <span onClick={handleAdminViewClick} className='pointerCursor dynamicHover m-2 p-2 techTheme text-decoration-none'>
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
                                <div className='col-sm-12 col-md-6 col-lg-7'>
                                    <div className='highlight-text m-2 p-md-2 project-header'>
                                        <h1 className='text-center project-heading-border'>{title}</h1>
                                        <p>{description}</p>
                                    </div>
                                    {(mobileVersion || admin) && (
                                        <div className='d-flex'>
                                            {mobileVersion && (
                                                <span onClick={handleMobileVersionClick} className='pointerCursor dynamicHover m-2 p-2 techTheme text-decoration-none'>
                                                    {showMobileVersion
                                                        ? 'Desktop Version'
                                                        : 'Mobile Version'}
                                                </span>
                                            )}
                                            {admin && (
                                                <span onClick={handleAdminViewClick} className='pointerCursor dynamicHover m-2 p-2 techTheme text-decoration-none'>
                                                    {showAdminView
                                                        ? 'User View'
                                                        : 'Admin View'}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-5'>
                                    <div className='m-md-3 m-sm-0'>
                                        <img
                                            className='min-height w-100'
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
                            <div className='highlight-text mt-3 p-sm-0 p-md-3 text-center project-header'>
                                <h1 className='project-heading-border'>{title}</h1>
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
