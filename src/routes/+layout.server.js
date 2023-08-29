import translations from '../lib/lang/translations';

export const actions = {
  language: async ({ cookies, request }) => {
    const formData = await request.formData();
    const lang = formData.get('lang');

    cookies.set('lang', lang);

    return {
      success: true,
    };
  },
};

// Read the cookie
export const load = ({ cookies, request }) => {
  // Read default user selected lang
  const accepted = request.headers
    .get('accept-language')
    ?.match(/[a-zA-Z]\-]{2,10}/gm) || ['en'];

  let defaultLang = accepted.includes('en') ? 'en' : 'cz';

  // Read current cookie
  const currentCookie = cookies.get('lang');

  // If this doesn't exist set the default lang
  if (!currentCookie) {
    cookies.set('lang', defaultLang);
  }

  return {
    lang: currentCookie,
    dict: translations[currentCookie],
  };
};
