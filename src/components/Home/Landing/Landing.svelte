<script>
  export let t;
  import { onMount } from 'svelte';

  $: descriptionOpen = false;

  let descriptionEl;

  const openDescription = () => {
    descriptionOpen = !descriptionOpen;
  };

  onMount(() => {
    // Click anywhere else to close language and services menu
    const clickAnywhere = (event) => {
      if (descriptionEl && !descriptionEl.contains(event.target)) {
        descriptionOpen = false;
      }
    };

    const onScroll = () => {
      if (descriptionOpen) {
        descriptionOpen = false;
      }
    };

    document.addEventListener('mousedown', clickAnywhere);
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('mousedown', clickAnywhere);
      document.removeEventListener('scroll', onScroll);
    };
  });
</script>

<main>
  <h4>{$t('home.landing.sub')}</h4>
  <h1>{$t('home.landing.title')}</h1>

  <div class="cta">
    <a href="/contact">{$t('home.landing.cta')}</a>

    <button on:click={openDescription}>?</button>

    <div
      bind:this={descriptionEl}
      class={descriptionOpen ? 'description description-active' : 'description'}
    >
      <p>{$t('home.landing.text')}</p>
    </div>
  </div>

  <div class={descriptionOpen ? 'blur blur-active' : 'blur'} />
</main>

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

  // Cta
  .cta {
    display: flex;

    a {
      padding: 0.74em 1.9em;

      font-size: 0.905em;
      font-weight: 500;
      color: var(--primary);
      background: var(--accent);
      border-radius: 5em;
      text-decoration: none;
    }

    button {
      margin: 0 0 0 0.5em;
      padding: 0.74em 1.025em;

      font-size: 1em;
      font-weight: 500;
      color: var(--primary2-text);
      background: var(--primary);
      border-radius: 50%;
      border: none;
      box-shadow: 0px 4px 31px 0px rgba(0, 0, 0, 0.2);
    }
  }

  // Pop-up description
  .description {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    max-width: 0;
    padding: 1.3em 1.5em;

    background: var(--primary2);
    border-radius: 14px;
    z-index: 650;
    box-shadow: 0px 4px 31px 0px rgba(255, 255, 255, 0.55);
    transition: max-width 0.35s ease-out, opacity 0.25s ease-out;
    opacity: 0;
  }

  .description-active {
    max-width: 22.375em;
    opacity: 1;
  }

  // Blur
  .blur {
    position: fixed;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    z-index: 600;

    opacity: 0;
    background: var(--background-blur);
    backdrop-filter: blur(3px);
    transition: opacity 0.3s ease-out;
  }

  .blur-active {
    width: 100%;
    height: 100vh;
    opacity: 1;
  }
</style>
