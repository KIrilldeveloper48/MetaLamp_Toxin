import React, {useState} from 'react';
import {PropTypes} from 'prop-types';

import './checkbox.scss';

import ArrowBtn from '../elements/arrow-btn/Arrow-btn';
import CheckboxList from './checkbox-list/Checkbox-list';

const Checkbox = ({currentList, isExpended}) => {
  const [expandedStatus, setExpandedStatus] = useState(isExpended);

  const expandedBtnClickHandler = () => {
    setExpandedStatus((prev) => !prev);
  };

  const expandedClass = expandedStatus ? `checkbox--expanded` : ``;

  return (
    <div className={`checkbox ${expandedClass}`}>
      <h3 className="checkbox__list-title cta-title">
        expandable checkbox list
        <ArrowBtn extraClass="checkbox__btn" callback={expandedBtnClickHandler} isExpended={expandedStatus}/>
      </h3>

      {expandedStatus
        ?
        <CheckboxList currentList={currentList}/>
        : ``
      }
    </div>
  );
};

Checkbox.propTypes = {
  isExpended: PropTypes.bool.isRequired,
  currentList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  })).isRequired,
};

export default Checkbox;
