import React from 'react';
import {PropTypes} from 'prop-types';

import './arrow-btn.scss';

const ArrowBtn = ({extraClass, callback, isExpended}) => {
  const expandedClass = isExpended ? `arrow-btn--expanded` : ``;
  return (
    <button className={`${extraClass} arrow-btn ${expandedClass}`} onClick={callback}>
      <svg className="arrow-btn__svg" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z"/>
      </svg>
    </button>
  );
};

ArrowBtn.propTypes = {
  extraClass: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  isExpended: PropTypes.bool.isRequired,
};
export default ArrowBtn;
