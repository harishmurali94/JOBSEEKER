import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translations = {
  en: require("./en.json"),
  ch:require("./ch.json")
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = (ln) => {
  // fallback if no available language fits
  
  const fallback = { languageTag: ln || "en", isRTL: false };
  

  const { languageTag, isRTL } = fallback
    // RNLocalize.findBestAvailableLanguage(Object.keys(translations)) ||
    // fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  // I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = { [languageTag]: translations[languageTag] };
  i18n.locale = languageTag;
};

// /**
//  * Created by Jebin for ILeaf Solutions Pvt. Ltd.
//  * on February 12, 2020
//  * LanguageSwitching - Handles language switching operations.
//  */

// import * as RNLocalize from 'react-native-localize';
// import i18n from 'i18n-js';
// import memoize from 'lodash.memoize';
// import {I18nManager} from 'react-native';

// const translationGetters = {
//   // lazy requires (metro bundler does not support symlinks)
//   // ar: () => require("../android/app/src/main/assets/translations/ar.json"),
//   en: () => require("./en.json"),
//   // fr: () => require("../android/app/src/main/assets/translations/fr.json"),
// };

// export const translate = memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key),
// );

// export const setI18nConfig = () => {
//   // fallback if no available language fits
//   const fallback = { languageTag: "en", isRTL: false };

//   const { languageTag, isRTL } =
//     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
//     fallback;

//   // clear translation cache
//   translate.cache.clear();
//   // update layout direction
//   I18nManager.forceRTL(isRTL);

//   // set i18n-js config
//   i18n.translations = { [languageTag]: translationGetters[languageTag]() };
//   i18n.locale = languageTag;
// };