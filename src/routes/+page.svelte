<script>
  import { t } from '$lib/lang/translations';
  import Landing from '../components/Home/Landing/Landing.svelte';
  import Showcase from '../components/Home/Landing/Showcase.svelte';
  import Whyus from '../components/Home/Landing/Whyus.svelte';
</script>

<svelte:head>
  <title>{$t('home.head.title')}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <Landing {t} />
  <Showcase />
  <!-- <Whyus {t} /> -->
</div>

<style lang="scss">
</style>
