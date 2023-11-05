<script>
  import { t } from '$lib/lang/translations';
  import Work from '../../components/Work/Work/Work.svelte';
  import Reviews from '../../components/Reviews/Reviews.svelte';
  import Footer from '../../components/Footer/Footer.svelte';
</script>

<svelte:head>
  <title>{$t('work.head.title')}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <Work {t} />
  <Reviews {t} />
  <Footer {t} />
</div>

<style lang="scss">
</style>
