import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Content from './Content';

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
