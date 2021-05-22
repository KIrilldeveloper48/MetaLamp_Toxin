import React from 'react';
import {PropTypes} from 'prop-types';
import {nanoid} from 'nanoid';

import './text-field.scss';


const TextField = ({placeholder, label, styleType = ``, mod = ``}) => {

  const isUiKit = styleType && <span className="text-field__style cta-title">{styleType}</span>;
  const classMod = mod && `text-field--${mod}`;
  const inputName = `input-${nanoid()}`;

  return (
    <div className={`text-field ${classMod}`}>
      {isUiKit}
      <label htmlFor={inputName} className="text-field__label cta-title">{label}</label>
      <input id={inputName} className="text-field__input common-font" type="text" placeholder={placeholder} />
    </div>
  );
};

TextField.propTypes = {
  mod: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  styleType: PropTypes.string,
};

export default TextField;
