import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './translations/en.json';
import ua from './translations/ua.json';

const resources = {
  en,
  ua,
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  react: {
    useSuspense: false,
  },
});

export default i18next;
