// import { loadTranslations } from '$lib/lang/translations.js';

// /** @type {import('@sveltejs/kit').Load} */
// export const load = async ({ url }) => {
//   const { pathname } = url;

//   console.log('kokot');
//   console.log(url);

//   const initLocale = 'en'; // get from cookie, user session, ...

//   await loadTranslations(initLocale, pathname); // keep this just before the `return`

//   return {};
// };

import {
  addTranslations,
  setLocale,
  setRoute,
} from '$lib/translations/index.js';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ data }) => {
  const { i18n, translations } = data;
  const { locale, route } = i18n;

  addTranslations(translations);

  await setRoute(route);
  await setLocale(locale);

  return i18n;
};
