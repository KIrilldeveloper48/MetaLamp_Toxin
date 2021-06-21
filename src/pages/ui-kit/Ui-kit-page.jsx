import React from 'react';

import ColorList from '@components/color-list/Color-list';
import FontTypeList from '@components/font-type-list/Font-type-list';
import TextField from '@components/text-field/Text-field';
import Dropdown from '@/components/dropdown/Dropdown';

import UiKitLogo from '../../assets/img/logo/logo-transparent';

import './ui-kit.scss';
import NumberField from '../../components/number-field/Number-field';
import SubscriptionForm from '../../components/subscription-form/Subscription-form';
import Checkbox from '../../components/checkbox/Checkbox';
import {CheckboxList, DropdownsList} from './../../conts';

const UiKitPage = () => {

  const CheckboxListForUiKit = {
    features: [
      {title: `Завтрак`, descr: ``, checked: false},
      {title: `Письменный стол`, descr: ``, checked: true},
      {title: `Стул для кормления`, descr: ``, checked: true},
      {title: `Кроватка`, descr: ``, checked: true},
      {title: `Телевизор`, descr: ``, checked: false},
      {title: `Шампунь`, descr: ``, checked: false},
    ]
  };
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

            <Dropdown currentList={[``]} placeholder="Сколько гостей" label="Dropdown" />

            <NumberField placeholder="ДД.ММ.ГГГГ" label="masked text field" />
          </div>

          <div className="form-elements__group-2">
            <div className="form-elements__date-dropdown">
              <Dropdown currentList={[``]} placeholder="ДД.ММ.ГГГГ" label="Date dropdown" />
              <Dropdown currentList={[``]} placeholder="19.08.2019" label="Date dropdown" />
            </div>

            <div className="form-elements__filter-date">
              <Dropdown currentList={[``]} placeholder="19 авг - 23 авг" label="Fiter date dropdown" />
            </div>

            <div className="form-elements__filter-date">
              <SubscriptionForm label="Subscription text field"/>
            </div>

          </div>

          <div className="form-elements__group-3">
            <Dropdown currentList={[``]} placeholder="2 спальни, 2 кровати..." label="dropdown" styleType="Default" mod="ui-kit-default" />
            <Dropdown currentList={DropdownsList.DROPDOWN_ROOM_FILTERS} placeholder="2 спальни, 2 кровати..." label="dropdown" styleType="Expanded" mod="ui-kit-expanded" />
          </div>

          <div className="form-elements__group-4">
            <Checkbox currentList={CheckboxListForUiKit.features} isExpended={false}/>
            <Checkbox currentList={CheckboxListForUiKit.features} isExpended={true}/>
          </div>

        </div>
      </section>

    </>
  );
};

export default UiKitPage;
