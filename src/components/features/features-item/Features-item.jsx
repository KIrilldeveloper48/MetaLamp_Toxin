import React from 'react';
import {PropTypes} from 'prop-types';

import './features-item.scss';

const FeaturesItem = ({title, image, descr}) => {
  return (
    <li key={title} className="features__item">
      <img className="features__img" src={image} alt={descr}/>
      <h3 className="features__title common-font">{title}</h3>
      <p className="features__descr common-font">{descr}</p>
    </li>
  );
};

FeaturesItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired
};

export default FeaturesItem;
