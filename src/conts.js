import comfortImage from '@/assets/img/icons/insert_emoticon.svg';
import convenienceImage from '@/assets/img/icons/location_city.svg';

const DROPDOWN_ROOM_FILTERS = [`Спальни`, `Кровати`, `Ванные комнаты`];
const DROPDOWN_GUEST = [`Взрослые`, `Дети`, `Младенцы`];

const CHECKBOX_A11Y = [
  {title: `Широкий коридор`, descr: `Ширина коридоров в номере не менее 91 см.`, checked: false},
  {title: `Помощник для инвалидов`, descr: `На 1 этаже вас встретит специалист  и проводит до номера.`, checked: false}
];

const CHECKBOX_FEATURES = [
  {title: `Завтрак`, descr: ``, checked: false},
  {title: `Письменный стол`, descr: ``, checked: false},
  {title: `Стул для кормления`, descr: ``, checked: false},
  {title: `Кроватка`, descr: ``, checked: false},
  {title: `Телевизор`, descr: ``, checked: false},
  {title: `Шампунь`, descr: ``, checked: false},
];

const CHECKBOX_RULES = [
  {title: `Можно курить`, descr: ``, checked: false},
  {title: `Можно с питомцами`, descr: ``, checked: false},
  {title: `Можно пригласить гостей (до 10 человек)`, descr: ``, checked: false},
  {title: `Кроватка`, descr: ``, checked: false},
  {title: `Телевизор`, descr: ``, checked: false},
  {title: `Шампунь`, descr: ``, checked: false},
];

export const COLORS_DATA = [
  {colorName: `Dark Shade 100%`, colorCode: `#1F2041`, id: `title-color`},
  {colorName: `Dark Shade 75%`, colorCode: `#1F2041`, id: `text-color`},
  {colorName: `Dark Shade 50%`, colorCode: `#1F2041`, id: `label-color`},
  {colorName: `Dark Shade 25%`, colorCode: `#1F2041`, id: `placeholder-color`},
  {colorName: `Dark Shade 5%`, colorCode: `#1F2041`, id: `transparent-color`},
  {colorName: `Purple`, colorCode: `#BC9CFF`, id: `primary-color`},
  {colorName: `Green`, colorCode: `#6FCF97`, id: `secondary-color`},
];

export const FONT_TYPES_DATA = [
  {
    type: `H1`,
    text: `This one is the sub-section or widget title`,
    id: `primary-title`
  },
  {
    type: `H2`,
    text: `Next one is the item title inside widgets`,
    id: `secondary-title`
  },
  {
    type: `H3`,
    text: `This is a label or CTA text`,
    id: `cta-title`
  },
  {
    type: `Body`,
    text: `This is the body text which is used for most of the design, like paragraphs, lists, etc.`,
    id: `common-font`
  }
];

export const DropdownsList = {
  "DROPDOWN_ROOM_FILTERS": DROPDOWN_ROOM_FILTERS,
  "DROPDOWN_GUEST": DROPDOWN_GUEST
};

export const CheckboxList = {
  "CHECKBOX_FEATURES": CHECKBOX_FEATURES,
  "CHECKBOX_A11Y": CHECKBOX_A11Y,
  "CHECKBOX_RULES": CHECKBOX_RULES
};

export const FEATURES = [
  {title: `Комфорт`, descr: `Шумопоглощающие стены`, image: comfortImage},
  {title: `Удобство`, descr: `Окно в каждой из спален`, image: convenienceImage}
];
