import React, {useState} from 'react';
import {PropTypes} from 'prop-types';

import './dropdown.scss';

import DropdownList from './dropdown-list/Dropdown-list';
import {DropdownsList} from '../../conts';

const Dropdown = ({label, placeholder, mod = ``, styleType = ``}) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const classMod = mod && `dropdown--${mod}`;
  const expanded = dropdownStatus ? `dropdown__expanded` : ``;
  const isUiKit = styleType && <span className="dropdown__style cta-title">{styleType}</span>;

  const dropdownClickHandler = (evt) => {
    evt.preventDefault();
    setDropdownStatus((prev) => !prev);
  };

  return (
    <div className={`dropdown ${classMod} ${expanded}`}>
      {isUiKit}
      <span className="dropdown__label cta-title">{label}</span>
      <div className="dropdown__select-wrapper">
        <button className="dropdown__btn" onClick={dropdownClickHandler}></button>
        <select className="dropdown__select common-font" defaultValue={placeholder} disabled>
          <option className="vs-hidden" value={placeholder}>{placeholder}</option>
        </select>

        {
          dropdownStatus || styleType === `Expanded` ? <DropdownList currentList={DropdownsList.DROPDOWN_ROOM_FILTERS} /> : ``
        }
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  mod: PropTypes.string,
  styleType: PropTypes.string,

};

export default Dropdown;
