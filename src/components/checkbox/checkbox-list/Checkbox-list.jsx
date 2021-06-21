import React from 'react';
import CheckboxItem from './checkbox-item/Checkbox-item';
import {PropTypes} from 'prop-types';

import './checkbox-list.scss';

const CheckboxList = ({currentList}) => {
  return (
    <ul className="checkbox__list">
      {
        currentList.map(({title, descr, checked}) => <CheckboxItem key={title} title={title} descr={descr} checked={checked}/>)
      }
    </ul>
  );
};

CheckboxList.propTypes = {
  currentList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  })).isRequired,
};

export default CheckboxList;
