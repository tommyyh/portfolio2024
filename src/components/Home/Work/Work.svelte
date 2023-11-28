<script>
  export let t;
  import Showcase from './Showcase.svelte';
</script>

<div class="cont">
  <section>
    <div class="content">
      <div>
        <h4>{$t('home.work.sub')}</h4>
        <h2>{$t('home.work.title')}</h2>
      </div>

      <div>
        <p>{$t('home.work.text')}</p>
        <a href="/work">{$t('home.work.cta')}</a>
      </div>
    </div>
  </section>

  <Showcase />
</div>

<style lang="scss">
  .cont {
    background: linear-gradient(
      110deg,
      #0c0a0b 20.04%,
      rgba(12, 10, 11, 0.95) 97.82%
    );
    box-shadow: 0px 4px 174px 0px rgba(0, 0, 0, 0.43);

    padding: 4.7em 0 5.2em 0;
  }

  .content {
    padding: 0 var(--padding);

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
      margin: 1.26em 0 2.99em 0;

      font-size: 0.94em;
      font-weight: 300;
      line-height: 145%;
      color: var(--dark-text);
    }

    a {
      margin: 0 0 0 0;
      padding: 0.74em 1.9em;

      font-size: 0.97em;
      font-weight: 600;
      color: var(--accent);
      background: var(--primary);
      border-radius: 5em;
      text-decoration: none;
      border: none;
    }
  }

  @media all and (min-width: 1025px) {
    .cont {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      overflow-x: hidden;
      position: relative;
      padding: 0;

      background: linear-gradient(
        110deg,
        #0c0a0b 20.04%,
        rgba(12, 10, 11, 0.95) 95.82%
      );
      margin: 3.7em 0 0 0;
    }

    section {
      width: var(--width);
      margin: initial;
      padding: 7em 0 0.8em 0;

      background: initial;
    }

    .content {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 44% 54%;

      padding: 0 var(--padding2);

      h4 {
        font-size: 1.13em;
        font-weight: 400;
        color: var(--dark-sub);
      }

      h2 {
        margin: 0.1em 0 0 0;

        font-size: 2.9em;
        font-weight: 700;
        line-height: 122%;
        color: var(--primary);
        text-shadow: 0px 4px 70px rgba(255, 255, 255, 0.25);
      }

      p {
        margin: 2em 22% 1.94em 0;

        font-size: 1.1em;
        font-weight: 300;
        line-height: 153%;
        color: var(--primary);
      }

      a {
        padding: 0.74em 1.9em;

        font-size: 1.01em;
        font-weight: 600;
        color: var(--accent);
        background: var(--primary);
        border-radius: 5em;
        text-decoration: none;
        border: none;
        transition: 300ms ease;

        &:hover {
          box-shadow: 0px 4px 39px 0px rgba(255, 255, 255, 0.22);
        }
      }
    }
  }
</style>
