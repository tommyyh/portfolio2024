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
      {#each new Array(3) as _, index}
        <Step {t} index={index + 1} />
      {/each}
    </div>
  </section>
</div>

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

  @media all and (min-width: 1025px) {
    .cont {
      display: flex;
      justify-content: center;
      width: 100%;
      position: relative;
    }

    section {
      width: var(--width);
      padding: 9em var(--padding) 0 var(--padding);

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
        margin: 1.8em 0 0 3rem;

        font-size: 1.15em;
        font-weight: 300;
        line-height: 145%;
        color: var(--text);
      }
    }

    .content {
      display: grid;
      grid-template-columns: 46% 47%;
      padding: 0 var(--padding2);
      margin: 0 0 0 4rem;
    }

    .main {
      display: flex;
      justify-content: space-between;

      width: 100%;
      margin: 1.3rem 0 0 0;
    }
  }
</style>
