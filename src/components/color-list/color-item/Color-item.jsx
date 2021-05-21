import React from 'react';
import {PropTypes} from 'prop-types';

import './color-item.scss';

const ColorItem = ({colorName, colorCode, extraClass}) => {
  return (
    <li className="colors__item main-color">
      <div className={`colors__preview ${extraClass}`}></div>
      <h2 className="colors__name">{colorName}</h2>
      <p className="colors__hsl">{colorCode}</p>
    </li>
  );
};

ColorItem.propTypes = {
  colorName: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  extraClass: PropTypes.string.isRequired
};

export default ColorItem;
