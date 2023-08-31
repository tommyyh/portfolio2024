<script>
  import { t } from '$lib/lang/translations';
  import Header from './Header.svelte';
  import './styles.css';
</script>

<div class="app">
  <Header {t} />

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
