import React, { useState } from 'react';
import AboutMe from '../features/home/components/aboutMe';
import Content from '../features/home/components/content';

function ParentComponent() {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={toggleComponent}>Toggle Component</button>
      </div>
      {showComponent ? <AboutMe /> : <Content />}
    </div>
  );
}

export default ParentComponent;
