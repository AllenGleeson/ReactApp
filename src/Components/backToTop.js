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
    <a href='#nav' className="fixed-bottom-right tag backToTop slideInLeft border">
        <FontAwesomeIcon icon={faArrowAltCircleUp} beat size="lg" className='icon'/>
        <span className='backToTopSpan'>Back to top</span>
    </a>
  );
}

export default BackToTop;
