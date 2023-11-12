<script>
  import Target from './Target.svelte';
  export let t;

  const lang = 'home.forWhom';
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
      {#each new Array(2) as _, index}
        <Target {t} index={index + 1} />
      {/each}
    </div>
  </section>
</div>

<style lang="scss">
  section {
    padding: 8.3em var(--padding) 0 var(--padding);

    h4 {
      font-size: 1em;
      font-weight: 400;
      color: var(--sub);
    }

    h2 {
      margin: 0.1em 10% 0 0;

      font-size: 1.79em;
      font-weight: 700;
      line-height: 110%;
      color: var(--second);
      letter-spacing: -0.7px;
    }

    p {
      margin: 1.26em 0 4.3em 0;

      font-size: 0.93em;
      font-weight: 400;
      line-height: 140%;
      color: var(--text);
    }
  }

  @media all and (min-width: 1025px) {
    .cont {
      display: flex;
      justify-content: center;
      width: 100%;
      position: relative;
    }

    .content {
      display: grid;
      grid-template-columns: 46% 47%;
      padding: 0 var(--padding2) 0 var(--padding2);
      margin: 0 0 0 4rem;
    }

    section {
      width: var(--width);
      padding: 13.3em 0 0 0;

      h4 {
        font-size: 1.1em;
        font-weight: 400;
        color: var(--sub);
      }

      h2 {
        margin: 0.2em 10% 0 0;

        font-size: 2.31em;
        font-weight: 700;
        line-height: 120%;
        color: var(--second);
        letter-spacing: -0.7px;
      }

      p {
        margin: 1.7em 0 0 0;

        font-size: 1.13em;
        font-weight: 400;
        line-height: 148%;
        color: var(--text);
      }
    }

    .main {
      display: flex;
      justify-content: space-between;

      width: 100%;
      margin: 1.78rem 0 0 0;
    }
  }
</style>
