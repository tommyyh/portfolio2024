import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  loaders: [
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'cs',
      key: 'home',
      loader: async () => (await import('./cs/home.json')).default,
    },
    {
      locale: 'en',
      key: 'contact',
      routes: ['/contact'],
      loader: async () => (await import('./en/contact.json')).default,
    },
    {
      locale: 'cs',
      key: 'contact',
      loader: async () => (await import('./cs/contact.json')).default,
    },
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config
);
