import React from 'react';
import {PropTypes} from 'prop-types';

import './common-text-field.scss';

const CommonTextField = ({mod = ``, inputName, placeholder, label, styleType = false}) => {

  const isUiKit = styleType && <span className="text-field__style cta-title">{styleType}</span>;

  return (
    <div className={`text-field text-field--${mod}`}>
      {isUiKit}
      <label htmlFor={inputName} className="text-field__label cta-title">{label }</label>
      <input id={inputName} className="text-field__input common-font" type="text" placeholder={placeholder}/>
    </div>
  );
};

CommonTextField.propTypes = {
  mod: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  styleType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

export default CommonTextField;
