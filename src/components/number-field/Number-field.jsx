import React from 'react';
import {PropTypes} from 'prop-types';
import {nanoid} from 'nanoid';

import './number-field.scss';


const NumberField = ({placeholder, label, mod = ``}) => {

  const classMod = mod && `number-field--${mod}`;
  const inputName = `input-${nanoid()}`;

  return (
    <div className={`number-field ${classMod}`}>
      <label htmlFor={inputName} className="number-field__label cta-title">{label}</label>
      <input id={inputName} className="number-field__input common-font" type="number" placeholder={placeholder} pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"/>
    </div>
  );
};

NumberField.propTypes = {
  mod: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default NumberField;
