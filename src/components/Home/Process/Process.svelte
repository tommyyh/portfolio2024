<script>
  import Step from './Step.svelte';
  export let t;

  const lang = 'home.process';
</script>

<div class="cont">
  <section>
    <div class="content">
      <div>
        <h4>{$t(`${lang}.sub`)}</h4>
        <h2>{$t(`${lang}.title`)}</h2>
      </div>

      <p>{$t(`${lang}.text`)}</p>
    </div>

    <div class="main">
      <div class="main-inner">
        {#each new Array(2) as _, index}
          <Step {t} index={index + 1} />
        {/each}
      </div>

      <div class="main-inner main-inner2">
        {#each new Array(2) as _, index}
          <Step {t} index={index + 3} />
        {/each}
      </div>
    </div>
  </section>
</div>

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

  @media all and (min-width: 1025px) {
    .cont {
      display: flex;
      justify-content: center;
      position: relative;

      width: 100%;

      background: var(--accent);
      margin: 13em 0 0 0;
    }

    section {
      margin: 0 0 0 0;
      width: var(--width);
      padding: 6.3em 0 7.2em 0;

      background: initial;
    }

    .content {
      display: grid;
      grid-template-columns: 46% 47%;
      padding: 0 var(--padding2);
      margin: 0 0 0 4rem;

      h4 {
        font-size: 1.1em;
        font-weight: 400;
        color: var(--dark-sub);
      }

      h2 {
        margin: 0.1em 0 0 0;

        font-size: 2.31em;
        font-weight: 700;
        line-height: 122%;
        color: var(--primary);
      }

      p {
        margin: 1.4em 0 0 0;

        font-size: 1.13em;
        font-weight: 300;
        line-height: 145%;
        color: var(--dark-text);
      }
    }

    // Main
    .main {
      margin: 1rem 0 0 0;
    }

    .main-inner {
      display: flex;
      align-items: flex-end;
    }

    .main-inner2 {
      justify-content: flex-end;

      margin: 1.8rem 4.5rem 0 0;
    }
  }
</style>
