import React, {useState} from 'react';
import {PropTypes} from 'prop-types';

import './dropdown.scss';

import DropdownList from './dropdown-list/Dropdown-list';
import ArrowBtn from '../elements/arrow-btn/Arrow-btn';

const Dropdown = ({currentList, label, placeholder, mod = ``, styleType = ``}) => {
  const isExpended = styleType === `Expanded`;
  const [expandedStatus, setExpandedStatus] = useState(isExpended);

  const expandedClass = expandedStatus ? `dropdown__expanded` : ``;

  const dropdownClickHandler = (evt) => {
    evt.preventDefault();
    setExpandedStatus((prev) => !prev);
  };

  // !Only for UIKIT
  const classMod = mod && `dropdown--${mod}`;
  const isUiKit = styleType && <span className="dropdown__style cta-title">{styleType}</span>;
  // !

  return (
    <div className={`dropdown ${classMod} ${expandedClass}`}>
      {isUiKit}

      <h3 className="dropdown__label cta-title">
        {label}
      </h3>

      <div className="dropdown__select-wrapper">

        <ArrowBtn extraClass="dropdown__btn" callback={dropdownClickHandler} isExpended={expandedStatus}/>

        <select className="dropdown__select common-font" defaultValue={placeholder} disabled>
          <option className="vs-hidden" value={placeholder}>
            {placeholder}
          </option>
        </select>

        {
          expandedStatus ? <DropdownList currentList={currentList} /> : ``
        }
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  currentList: PropTypes.arrayOf(PropTypes.string).isRequired,
  mod: PropTypes.string,
  styleType: PropTypes.string,

};

export default Dropdown;
