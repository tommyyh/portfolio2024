<script>
  import { t } from '$lib/lang/translations';
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

  let servicesDistance;

  const servicesScrollToView = () => {
    if (screen.width > 1025) {
      servicesDistance.scrollIntoView({ behavior: 'smooth' });
    } else {
      servicesDistance.scrollIntoView();
    }
  };
</script>

<svelte:head>
  <title>{$t('home.head.title')}</title>
  <meta name="description" content="Svelte demo app" />
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
