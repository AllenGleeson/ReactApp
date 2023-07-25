import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

const BackToTop = () => {

  return (
    <a href='#nav' class="fixed-bottom-right tag backToTop slideInLeft">
        <FontAwesomeIcon icon={faArrowAltCircleUp} beat size="lg" className='icon'/>
        <span className='backToTopSpan'>Back to top</span>
    </a>
  );
}

export default BackToTop;
