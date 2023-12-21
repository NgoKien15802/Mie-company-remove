import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HOME_VI from '~/locales/vi/home.json';
import HOME_EN from '~/locales/en/home.json';


const resources = {
    en: {
        home: HOME_EN,
    },
    vi: {
        home: HOME_VI,
    },
};

const defaultNS = 'home';

i18n.use(initReactI18next).init({
    resources,
    lng: 'vi',
    ns: ['home'],
    fallbackLng: 'vi',
    defaultNS,
    interpolation: {
        escapeValue: false,
    },
});