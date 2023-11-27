<script>
  import { onMount } from 'svelte';
  import Service from './Service.svelte';
  export let t;

  export let servicesDistance = 0;
  let cont;

  onMount(() => {
    servicesDistance = cont;
  });
</script>

<div class="cont">
  <section id="services" bind:this={cont}>
    <div class="content">
      <div>
        <h4>{$t('home.services.sub')}</h4>
        <h2>{$t('home.services.title')}</h2>
      </div>
      <p>{$t('home.services.text')}</p>
    </div>

    <div class="services">
      {#each new Array(3) as _, index}
        <Service {t} index={index + 1} />
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

    .content {
      display: grid;
      grid-template-columns: 50% 47%;
      padding: 0 var(--padding2) 0 var(--padding2);
      margin: 0 0 0 4rem;
    }

    section {
      width: var(--width);
      padding: 9.4em 0 0 0;

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
        margin: 1.88em 0 0 0;

        font-size: 1.13em;
        font-weight: 400;
        line-height: 140%;
        color: var(--text);
      }
    }

    .services {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
</style>
