<script>
  import Service from './Service.svelte';
  export let t;
</script>

<section>
  <h4>{$t('home.services.sub')}</h4>
  <h2>{$t('home.services.title')}</h2>
  <p>{$t('home.services.text')}</p>

  <div class="services">
    {#each new Array(3) as _, index}
      <Service {t} index={index + 1} />
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
