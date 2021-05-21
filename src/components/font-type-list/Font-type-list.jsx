import React from 'react';
import {FONT_TYPES_DATA} from '../../conts';
import FontTypeItem from './font-type-item/Font-type-item';

import './font-type-list.scss';
const FontTypeList = () => {
  return (
    <div className="types">
      <ul className="types__list">
        {
          FONT_TYPES_DATA.map(({type, text, id}) => (
            <FontTypeItem key={id} type={type} text={text} extraClass={id}/>
          ))
        }
      </ul>
    </div>
  );
};

export default FontTypeList;
