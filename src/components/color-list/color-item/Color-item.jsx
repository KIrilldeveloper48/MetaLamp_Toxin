import React from 'react';
import {PropTypes} from 'prop-types';

import './color-item.scss';

const ColorItem = ({colorName, colorCode, extraClass}) => {
  return (
    <li className="colors__item">
      <div className={`colors__preview ${extraClass}`}></div>
      <div className="colors__wrapper">
        <h2 className="colors__name secondary-title">{colorName}</h2>
        <p className="colors__hsl secondary-title">{colorCode}</p>
      </div>
    </li>
  );
};

ColorItem.propTypes = {
  colorName: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  extraClass: PropTypes.string.isRequired
};

export default ColorItem;
