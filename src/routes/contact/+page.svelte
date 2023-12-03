<script>
  import { t, locale, locales } from '$lib/translations/index.js';
  import Landing from '../../components/Contact/Landing/Landing.svelte';
  import Form from '../../components/Contact/Form/Form.svelte';
  import Reviews from '../../components/Reviews/Reviews.svelte';
  import Footer from '../../components/Footer/Footer.svelte';
  import Header from '../Header.svelte';

  const headPath = 'contact.head';
  const domain = `${$t(`${headPath}.domain`)}/${
    $locale === 'en' ? 'cz' : 'en'
  }/contact`;
</script>

<svelte:head>
  <title>{$t(`${headPath}.title`)}</title>
  <meta name="description" content={$t(`${headPath}.desc`)} />
  <link rel="author" href={$t(`${headPath}.author`)} />
  <link
    rel="alternate"
    hreflang={$locale === 'en' ? 'cz' : 'en'}
    href={domain}
  />
  <link rel="canonical" href={domain} />
  <meta property="og:title" content={headPath.title} />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="datePublished" content="2023-12-3" />
  <meta name="dateModified" content="2023-12-4" />
</svelte:head>

<div>
  <Header {t} servicesScrollToView={null} isHome={false} />
  <Landing {t} />
  <Form {t} />
  <Reviews {t} />
  <Footer {t} />
</div>

<style lang="scss">
</style>
