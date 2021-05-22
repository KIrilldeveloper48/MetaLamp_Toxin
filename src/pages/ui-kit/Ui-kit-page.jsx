import React from 'react';

import ColorList from '@components/color-list/Color-list';
import FontTypeList from '@components/font-type-list/Font-type-list';
import CommonTextField from '@components/common-text-field/Common-text-field';

import UiKitLogo from '../../assets/img/logo/logo-transparent';

import './ui-kit.scss';

const UiKitPage = () => {
  return (
    <>
      <section className="colors-and-types">

        <div>
          <img src={UiKitLogo} alt="Логотип компании" />
        </div>

        <div className="colors-and-types__wrapper">
          <ColorList />
          <FontTypeList />
        </div>

      </section>

      <section className="form-elements">
        <div className="form-elements__column-1">
          <CommonTextField mod="ui-kit-default" inputName="ui-kit-default-field" placeholder="Email" label="Text Field" styleType="default"/>
          <CommonTextField mod="ui-kit-active" inputName="ui-kit-active-field" placeholder="This is pretty awesome" label="Text Field" styleType="Hover / Focus"/>
        </div>
      </section>

    </>
  );
};

export default UiKitPage;
