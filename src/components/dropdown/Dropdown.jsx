import React from 'react';
import {PropTypes} from 'prop-types';

import './dropdown.scss';

import DropdownList from './dropdown-list/Dropdown-list';
import {DropdownsList} from '../../conts';

const Dropdown = ({label, placeholder, mod = ``, styleType = ``}) => {

  const classMod = mod && `dropdown--${mod}`;
  const isUiKit = styleType && <span className="dropdown__style cta-title">{styleType}</span>;

  return (
    <div className={`dropdown ${classMod}`}>
      {isUiKit}
      <span className="dropdown__label cta-title">{label}</span>
      <div className="dropdown__select-wrapper">

        <select className="dropdown__select common-font" defaultValue={placeholder} disabled>
          <option className="vs-hidden" value={placeholder}>{placeholder}</option>
        </select>

        <DropdownList currentList={DropdownsList.DROPDOWN_ROOM_FILTERS}/>

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
