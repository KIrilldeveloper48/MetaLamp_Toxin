import React from 'react';
import FeaturesItem from './features-item/Features-item';

import {FEATURES} from './../../conts';

import './features.scss';

const Features = () => {
  return (
    <ul className="features">
      {
        FEATURES.map(({title, descr, image}) => (
          <FeaturesItem key={title} title={title} descr={descr} image={image}/>
        ))
      }
    </ul>
  );
};

export default Features;
