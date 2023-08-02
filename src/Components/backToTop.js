import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

const BackToTop = () => {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    // Get the height of the footer
    const footer = document.querySelector("footer");
    setFooterHeight(footer.offsetHeight);
  }, []);

  // Update the CSS variable value
  useEffect(() => {
    document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
  }, [footerHeight]);

  return (
    <a href='#nav' className="backToTop fixed-bottom-right slideInLeft">
        <div className='border rounded-1 rounded-circle'>
          <FontAwesomeIcon icon={faArrowAltCircleUp} beat size="lg" className='icon'/>
        </div>
    </a>
  );
}

export default BackToTop;
