import React from 'react';
import {PropTypes} from 'prop-types';
import {nanoid} from 'nanoid';


import './checkbox-item.scss';

const CheckboxItem = ({title, descr, checked}) => {

  const isDescr = descr ? <p className="checkbox__descr">{descr}</p> : ``;
  const checkboxName = `checkbox-${nanoid()}`;

  return (
    <li className="checkbox__item">
      <input className="vs-hidden" id={checkboxName} type="checkbox" defaultChecked={checked}/>
      <label htmlFor={checkboxName}>{title}</label>
      {isDescr}
    </li>
  );
};

CheckboxItem.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired
};

export default CheckboxItem;
