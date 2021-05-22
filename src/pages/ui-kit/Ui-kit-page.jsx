import React from 'react';

import ColorList from '@components/color-list/Color-list';
import FontTypeList from '@components/font-type-list/Font-type-list';
import TextField from '@components/text-field/Text-field';
import Dropdown from '@/components/dropdown/Dropdown';

import UiKitLogo from '../../assets/img/logo/logo-transparent';

import './ui-kit.scss';
import NumberField from '../../components/number-field/Number-field';
import SubscriptionForm from '../../components/subscription-form/Subscription-form';

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
          <div className="form-elements__group-1">
            <TextField
              mod="ui-kit-default"
              placeholder="Email"
              label="Text Field"
              styleType="default" />
            <TextField
              mod="ui-kit-active"
              placeholder="This is pretty awesome"
              label="Text Field"
              styleType="Hover / Focus" />

            <Dropdown placeholder="Сколько гостей" label="Dropdown" />

            <NumberField placeholder="ДД.ММ.ГГГГ" label="masked text field" />
          </div>

          <div className="form-elements__group-2">
            <div className="form-elements__date-dropdown">
              <Dropdown placeholder="ДД.ММ.ГГГГ" label="Date dropdown" />
              <Dropdown placeholder="19.08.2019" label="Date dropdown" />
            </div>

            <div className="form-elements__filter-date">
              <Dropdown placeholder="19 авг - 23 авг" label="Fiter date dropdown" />
            </div>

            <div className="form-elements__filter-date">
              <SubscriptionForm label="Subscription text field"/>
            </div>

          </div>

          <div className="form-elements__group-3">
            <Dropdown placeholder="2 спальни, 2 кровати..." label="dropdown" styleType="Default" mod="ui-kit-default"/>
          </div>

        </div>
      </section>

    </>
  );
};

export default UiKitPage;
