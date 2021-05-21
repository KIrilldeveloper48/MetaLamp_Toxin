import React from 'react';
import ColorList from '../components/color-list/Color-list';

const UiKitPage = () => {
  return (
    <section className="colors-and-types">
      <div>
        <img src="../assets/img/logo/logo-transparent.svg" alt="Логотип компании" />
      </div>

      <ColorList />

      <div className="types"></div>
    </section>
  );
};

export default UiKitPage;
