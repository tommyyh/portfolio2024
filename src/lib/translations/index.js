// import i18n from 'sveltekit-i18n';

// /** @type {import('sveltekit-i18n').Config} */
// const config = {
//   loaders: [
//     {
//       locale: 'en',
//       key: 'home',
//       routes: ['/'],
//       loader: async () => (await import('./en/home.json')).default,
//     },
//     {
//       locale: 'cs',
//       key: 'home',
//       loader: async () => (await import('./cs/home.json')).default,
//     },
//     {
//       locale: 'en',
//       key: 'contact',
//       routes: ['/contact'],
//       loader: async () => (await import('./en/contact.json')).default,
//     },
//     {
//       locale: 'cs',
//       key: 'contact',
//       loader: async () => (await import('./cs/contact.json')).default,
//     },
//     {
//       locale: 'en',
//       key: 'work',
//       routes: ['/work'],
//       loader: async () => (await import('./en/work.json')).default,
//     },
//     {
//       locale: 'cs',
//       key: 'work',
//       loader: async () => (await import('./cs/work.json')).default,
//     },
//   ],
// };

// export const { t, locale, locales, loading, loadTranslations } = new i18n(
//   config
// );

import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
  log: {
    level: dev ? 'warn' : 'error',
  },
  translations: {
    en: { lang },
    cs: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'en',
      key: 'contact',
      routes: ['/contact'],
      loader: async () => (await import('./en/contact.json')).default,
    },
    {
      locale: 'en',
      key: 'work',
      routes: ['/work'],
      loader: async () => (await import('./en/work.json')).default,
    },
    {
      locale: 'cs',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./cs/home.json')).default,
    },
    {
      locale: 'cs',
      key: 'contact',
      routes: ['/contact'],
      loader: async () => (await import('./cs/contact.json')).default,
    },
    {
      locale: 'cs',
      key: 'work',
      routes: ['/work'],
      loader: async () => (await import('./cs/work.json')).default,
    },
  ],
};

export const {
  t,
  loading,
  locales,
  locale,
  translations,
  loadTranslations,
  addTranslations,
  setLocale,
  setRoute,
} = new i18n(config);

loading.subscribe(
  ($loading) => $loading && console.log('Loading translations...')
);
