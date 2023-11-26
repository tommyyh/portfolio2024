<script>
  import { t } from '$lib/lang/translations';
  import Landing from '../../components/Contact/Landing/Landing.svelte';
  import Form from '../../components/Contact/Form/Form.svelte';
  import Reviews from '../../components/Reviews/Reviews.svelte';
  import Footer from '../../components/Footer/Footer.svelte';
</script>

<svelte:head>
  <title>{$t('home.head.title')}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <Landing {t} />
  <Form {t} />
  <Reviews {t} />
  <Footer {t} />
</div>

<style lang="scss">
</style>
