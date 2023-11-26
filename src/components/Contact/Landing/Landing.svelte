<script>
  export let t;

  const lang = 'contact.landing';

  const scrollDown = () => {
    window.scrollTo({
      top: 300,
      left: 0,
      behavior: 'smooth',
    });
  };
</script>

<div class="cont">
  <main>
    <div>
      <h4>{$t(`${lang}.sub`)}</h4>
      <h1>{$t(`${lang}.title`)}</h1>
    </div>

    <div class="desktop">
      <p>{$t(`${lang}.text`)}</p>
      <button on:click={scrollDown}>{$t(`${lang}.cta`)}</button>
    </div>
  </main>
</div>

<style lang="scss">
  main {
    padding: 5.25em var(--padding) 0 var(--padding);

    h4 {
      font-size: 0.77em;
      font-weight: 500;
      color: var(--sub2);
    }

    h1 {
      margin: 0.12em 0 0.55em -0.05em;

      font-size: 2.25em;
      font-weight: 700;
      color: var(--accent);
      line-height: 108.5%;
    }
  }

  .desktop {
    display: none;
  }

  @media all and (min-width: 1025px) {
    .cont {
      display: flex;
      justify-content: center;
      width: 100%;
      position: relative;
    }

    main {
      display: grid;
      grid-template-columns: 49% 40%;
      justify-content: space-between;

      width: var(--width);
      padding: 7em var(--padding2) 0 var(--padding2);

      h4 {
        font-size: 1.07em;
        font-weight: 500;
        color: var(--sub2);
      }

      h1 {
        margin: 0.05em 3rem 0.55em -0.05em;

        font-size: 3.44em;
        font-weight: 700;
        color: var(--accent);
        line-height: 105.5%;
      }

      p {
        margin: 2rem 0 2.9rem 0;

        font-size: 1.15rem;
        color: var(--text2);
      }

      button {
        padding: 0.9em 1.9em;

        font-size: 1.03em;
        font-weight: 500;
        color: var(--primary);
        background: var(--accent);
        border-radius: 5em;
        text-decoration: none;
        border: none;
      }
    }

    .desktop {
      display: initial;
    }
  }
</style>
