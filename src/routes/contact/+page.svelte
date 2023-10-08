<script>
  import { t } from '$lib/lang/translations';
  import Landing from '../../components/Home/Landing/Landing.svelte';
</script>

<svelte:head>
  <title>{$t('home.head.title')}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <Landing {t} />
</div>

<style lang="scss">
</style>
