<script>
  export let t;
  import Question from './Question.svelte';

  const lang = 'home.faq';
  $: allOpen = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  };
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
      {#each new Array(6) as _, index}
        <Question {t} index={index + 1} bind:allOpen />
      {/each}
    </div>
  </section>
</div>

<style lang="scss">
  section {
    padding: 6.25em var(--padding) 0 var(--padding);

    h4 {
      font-size: 1.1em;
      font-weight: 400;
      color: var(--sub);
    }

    h2 {
      margin: 0em 0 0 0;

      font-size: 2.31em;
      font-weight: 700;
      line-height: 122%;
      color: var(--second);
      letter-spacing: -0.7px;
    }

    p {
      margin: 1.26em 0 0 0;

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

    section {
      width: var(--width);
      padding: 14em var(--padding) 0 var(--padding);

      h4 {
        font-size: 1.1em;
        font-weight: 400;
        color: var(--sub);
      }

      h2 {
        margin: 0.1em 7% 0 0;

        font-size: 2.31em;
        font-weight: 700;
        line-height: 110%;
        color: var(--second);
        letter-spacing: -0.7px;
      }

      p {
        margin: 1.9em 0 0 0;

        font-size: 1.1rem;
        font-weight: 400;
        line-height: 140%;
        color: var(--text);
      }
    }

    .content {
      display: grid;
      grid-template-columns: 48% 52%;
      padding: 0 var(--padding2);
      margin: 0 0 0 4rem;
    }

    .main {
      display: grid;
      grid-template-columns: repeat(auto-fill, 50% 50%);
      height: auto;
      justify-content: flex-start;
      align-items: flex-start;

      margin: 3rem 0 0 0;
    }
  }
</style>
