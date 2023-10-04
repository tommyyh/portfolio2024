<script>
  export let t;
  import Question from './Question.svelte';

  const lang = 'home.faq';
</script>

<section>
  <div class="content">
    <h4>{$t(`${lang}.sub`)}</h4>
    <h2>{$t(`${lang}.title`)}</h2>
    <p>{$t(`${lang}.text`)}</p>
  </div>

  <div class="main">
    {#each new Array(6) as _, index}
      <Question {t} index={index + 1} />
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    padding: 6.25em var(--padding) 0 var(--padding);

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
      margin: 1.26em 0 0 0;

      font-size: 0.93em;
      font-weight: 400;
      line-height: 140%;
      color: var(--text);
    }
  }
</style>
