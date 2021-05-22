import React from 'react';
import {PropTypes} from 'prop-types';
import {nanoid} from 'nanoid';

import './subscription-form.scss';


const SubscriptionForm = ({label}) => {

  const inputName = `input-${nanoid()}`;

  return (
    <form className="subscription-form">
      <label htmlFor={inputName} className="subscription-form__label cta-title">{label}</label>
      <input id={inputName} className="subscription-form__input common-font" type="text" placeholder="Email" />
      <button className="subscription-form__submit" type="submit"></button>
    </form>
  );
};

SubscriptionForm.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SubscriptionForm;
