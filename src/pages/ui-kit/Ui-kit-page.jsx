import React from 'react';
import ColorList from '@components/color-list/Color-list';
import FontTypeList from '@components/font-type-list/Font-type-list';

import UiKitLogo from '../../assets/img/logo/logo-transparent';

import './ui-kit.scss';

const UiKitPage = () => {
  return (
    <section className="colors-and-types">

      <div>
        <img src={UiKitLogo} alt="Логотип компании" />
      </div>

      <div className="colors-and-types__wrapper">
        <ColorList />
        <FontTypeList />
      </div>


    </section>
  );
};

export default UiKitPage;
