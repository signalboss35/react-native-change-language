import I18n from 'react-native-i18n';
import en from '../locales/en';
import th from '../locales/th'; 

I18n.fallbacks = true;

I18n.translations = {
  en,
  th,
};

I18n.locale = 'en'

export default I18n;
