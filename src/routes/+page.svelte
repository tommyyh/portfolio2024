<script>
  import { t } from '$lib/lang/translations';
  import Landing from '../components/Home/Landing/Landing.svelte';
  import Showcase from '../components/Showcase.svelte';
  import Whyus from '../components/Home/Whyus/Whyus.svelte';
  import Work from '../components/Home/Work/Work.svelte';
  import Services from '../components/Home/Services/Services.svelte';
  import Process from '../components/Home/Process/Process.svelte';
  import Reviews from '../components/Reviews/Reviews.svelte';
</script>

<svelte:head>
  <title>{$t('home.head.title')}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <Landing {t} />
  <Showcase />
  <Whyus {t} />
  <Work {t} />
  <Services {t} />
  <Process {t} />
  <Reviews {t} />
</div>

<style lang="scss">
</style>
