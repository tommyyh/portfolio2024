<script>
  import Step from './Step.svelte';
  export let t;

  const lang = 'home.process';
</script>

<section>
  <div class="content">
    <h4>{$t(`${lang}.sub`)}</h4>
    <h2>{$t(`${lang}.title`)}</h2>
    <p>{$t(`${lang}.text`)}</p>
  </div>

  <div class="main">
    {#each new Array(4) as _, index}
      <Step {t} index={index + 1} />
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    margin: 7.625em 0 0 0;
    padding: 3.7em var(--padding) 5.7em var(--padding);

    background: var(--accent);
  }

  .content {
    h4 {
      font-size: 0.95em;
      font-weight: 400;
      color: var(--dark-sub);
    }

    h2 {
      margin: 0.1em 0 0 0;

      font-size: 1.78em;
      font-weight: 700;
      line-height: 122%;
      color: var(--primary);
    }

    p {
      margin: 1.26em 0 0 0;

      font-size: 0.94em;
      font-weight: 300;
      line-height: 145%;
      color: var(--dark-text);
    }
  }
</style>
