<script>
  import Step from './Review.svelte';
  import { page } from '$app/stores';
  export let t;

  let lang;

  if ($page.url.pathname === '/') {
    lang = 'home.reviews';
  } else if ($page.url.pathname === '/contact') {
    lang = 'contact.reviews';
  } else if ($page.url.pathname === '/work') {
    lang = 'work.reviews';
  } else {
    lang = 'home.reviews';
  }
</script>

<section>
  <div class="content">
    <h4>{$t(`${lang}.sub`)}</h4>
    <h2>{$t(`${lang}.title`)}</h2>
    <p>{$t(`${lang}.text`)}</p>
  </div>

  <div class="main">
    {#each new Array(3) as _, index}
      <Step {t} index={index + 1} />
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
