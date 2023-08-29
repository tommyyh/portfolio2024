<script>
  import Header from './Header.svelte';
  import './styles.css';

  export let data;
</script>

<div class="app">
  <Header {data} />

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
