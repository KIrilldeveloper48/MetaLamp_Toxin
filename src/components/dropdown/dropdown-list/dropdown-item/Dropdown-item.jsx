import React from 'react';
import {PropTypes} from 'prop-types';

const DropdownItem = ({item}) => {
  return (
    <li className="dropdown__item dropdown-item">
      <p className="dropdown-item__text">{item}</p>
      <div className="dropdowm-item__calc">

        <span className="dropdown-item__dec">-</span>
        <span className="dropdown-item__count">0</span>
        <span className="dropdown-item__inc">+</span>

      </div>
    </li>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default DropdownItem;
