<script>
  // import { t } from '$lib/lang/translations';
  import { t, locale, locales } from '$lib/translations/index.js';
  import Landing from '../components/Home/Landing/Landing.svelte';
  import Showcase from '../components/Showcase.svelte';
  import Whyus from '../components/Home/Whyus/Whyus.svelte';
  import Work from '../components/Home/Work/Work.svelte';
  import Services from '../components/Home/Services/Services.svelte';
  import Process from '../components/Home/Process/Process.svelte';
  import ForWhom from '../components/Home/ForWhom/ForWhom.svelte';
  import Reviews from '../components/Reviews/Reviews.svelte';
  import FAQ from '../components/FAQ/FAQ.svelte';
  import Footer from '../components/Footer/Footer.svelte';
  import Header from './Header.svelte';
  import thumbnailPng from '$lib/images/thumbnail.png';

  let servicesDistance;

  const servicesScrollToView = () => {
    if (screen.width > 1025) {
      servicesDistance.scrollIntoView({ behavior: 'smooth' });
    } else {
      servicesDistance.scrollIntoView();
    }
  };

  const headPath = 'home.head';
  const domain = `${$t(`${headPath}.domain`)}/${
    $locale === 'en' ? 'cz' : 'en'
  }`;
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
  <meta property="og:image" content={thumbnailPng} />
</svelte:head>

<div>
  <Header {t} {servicesScrollToView} isHome={true} />
  <Landing {t} />
  <Showcase />
  <Whyus {t} />
  <Work {t} />
  <Services {t} bind:servicesDistance />
  <ForWhom {t} />
  <Process {t} />
  <Reviews {t} />
  <FAQ {t} />
  <Footer {t} />
</div>

<style lang="scss">
</style>
