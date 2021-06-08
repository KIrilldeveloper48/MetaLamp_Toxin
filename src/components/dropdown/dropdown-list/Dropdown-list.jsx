import React from 'react';
import {PropTypes} from 'prop-types';
import DropdownItem from './dropdown-item/Dropdown-item';
import './dropdown-list.scss';

const DropdownList = ({currentList}) => {
  return (
    <ul className="dropdown__list">
      {
        currentList.map((item) => <DropdownItem key={item} item={item}/>)
      }
    </ul>
  );
};

DropdownList.propTypes = {
  currentList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DropdownList;
