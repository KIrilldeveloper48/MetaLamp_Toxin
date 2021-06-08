import React, {useState} from 'react';
import {PropTypes} from 'prop-types';


import './dropdown-item.scss';
const DropdownItem = ({item}) => {
  const [count, setCount] = useState(0);
  const isDisabled = !count && `disabled`;
  const btnDisabled = !count && `dropdown-item__dec--disabled`;

  const decCount = () => {
    setCount((prev) => prev - 1);
  };

  const incCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <li className="dropdown__item dropdown-item cta-font">
      <p className="dropdown-item__text cta-title">{item}</p>
      <div className="dropdown-item__calc">
        <button className={`dropdown-item__dec ${btnDisabled}`} onClick={decCount} disabled={isDisabled}>-</button>
        <span className="dropdown-item__count cta-title">{count}</span>
        <button className="dropdown-item__inc" onClick={incCount}>+</button>
      </div>
    </li>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default DropdownItem;
