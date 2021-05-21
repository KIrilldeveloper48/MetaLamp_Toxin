import React from 'react';
import ColorItem from './color-item/Color-item';

import {COLORS_DATA} from '../../conts';

const ColorList = () => {
  return (
    <div className="colors">
      <ul className="colors__list">
        {
          COLORS_DATA.map(({colorName, colorCode, id}) => (
            <ColorItem key={id} colorName={colorName} colorCode={colorCode} extraClass={id} />)
          )
        }
      </ul>
    </div>
  );
};

export default ColorList;
