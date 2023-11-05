<script>
  export let t;
  import Project from './Project.svelte';

  const lang = 'work';
</script>

<main>
  {#each new Array(parseInt($t('work.work.amount'))) as _, index}
    <Project {t} index={index + 1} />
  {/each}
</main>

<style lang="scss">
</style>
