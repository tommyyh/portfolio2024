<script>
  export let t;
  import Project from './Project.svelte';

  const lang = 'work';
</script>

<div class="cont">
  <main>
    {#each new Array(parseInt($t('work.work.amount'))) as _, index}
      <Project {t} index={index + 1} />
    {/each}
  </main>
</div>

<style lang="scss">
  @media all and (min-width: 1025px) {
    .cont {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    main {
      padding: 1.5rem var(--padding2) 0 var(--padding2);
      width: var(--width);
    }
  }
</style>
