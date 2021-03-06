import React from 'react';

import './PartSelector.css'

const PartSelector = (props) => {

  let pt1ClassName = ''
  let pt2ClassName = ''
  if(props.active === 1) {
    pt1ClassName = 'active'
  }
  else {
    pt2ClassName = 'active'
  }

  return (
    <div className="PartSelector">
      <button className={pt1ClassName} onClick={props.onPartOneClick}>Populistic countries</button>
      <button className={pt2ClassName} onClick={props.onPartTwoClick}>Causes of populism</button>
    </div>
  );
};

export default PartSelector;