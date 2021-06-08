import React from 'react';

const Checkbox = () => {
  return (
    <div className="checkbox">
      <p className="checkbox__title cta-title">expandable checkbox list</p>
      <button className="checkbox__btn"></button>
      <ul className="checkbox__list">
        <li className="checkbox__item">
          <input id="check" type="checkbox" />
          <label htmlFor="check">Завтрак</label>
        </li>
      </ul>
    </div>
  );
};

export default Checkbox;
