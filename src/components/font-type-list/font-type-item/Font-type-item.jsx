import React from 'react';
import {PropTypes} from 'prop-types';

import './font-type-item.scss';
const FontTypeItem = ({type, text, extraClass}) => {
  return (
    <li className={`types__item ${extraClass}`}>
      <p className="types__title">{type}</p>
      <p className="types__preview">{text}</p>
    </li>
  );
};

FontTypeItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  extraClass: PropTypes.string.isRequired
};

export default FontTypeItem;
