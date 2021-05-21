import React from 'react';
import ColorList from '../components/color-list/Color-list';
import UiKitLogo from '../assets/img/logo/logo-transparent';
const UiKitPage = () => {
  return (
    <section className="colors-and-types">
      <div>
        <img src={UiKitLogo} alt="Логотип компании" />
      </div>

      <ColorList />

      <div className="types"></div>
    </section>
  );
};

export default UiKitPage;
