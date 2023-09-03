<script>
  export let t;
  import Showcase from '../../Showcase.svelte';
</script>

<section>
  <div class="content">
    <h4>{$t('home.work.sub')}</h4>
    <h2>{$t('home.work.title')}</h2>
    <p>{$t('home.work.text')}</p>
    <button>{$t('home.work.cta')}</button>
  </div>

  <Showcase />
</section>

<style lang="scss">
  section {
    margin: 2em 0 0 0;
    padding: 4.7em 0 5.2em 0;

    background: var(--accent);
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
      margin: 1.26em 0 0 0;

      font-size: 0.94em;
      font-weight: 300;
      line-height: 145%;
      color: var(--dark-text);
    }

    button {
      margin: 1.94em 0 0 0;
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
</style>
