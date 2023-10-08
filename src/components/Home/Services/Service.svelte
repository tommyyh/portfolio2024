<script>
  import Column from './Column.svelte';
  import HomeSvg from '$lib/images/services/home.svg';
  export let t;
  export let index;

  const lang = 'home.services.list';

  const importImage = async (imageName) => {
    const module = await import(
      `../../../lib/images/services/${imageName}.svg`
    );
    return module.default;
  };

  const imgName = $t(`${lang}.${index}.imageName`);
</script>

<div class="service">
  <div class="top">
    <div class="type">
      {#await importImage(imgName)}
        <img src={HomeSvg} alt="Service illustration" />
      {:then imageSrc}
        <img src={imageSrc} alt="Service illustration" />
      {:catch}
        <img src={HomeSvg} alt="Service illustration" />
      {/await}

      <div>
        <h3>{$t(`${lang}.${index}.title`)}</h3>
        <h5>{$t(`${lang}.${index}.sub`)}</h5>
      </div>
    </div>

    <a href="/contact" class="help">
      <h6>?</h6>
    </a>
  </div>

  <div class="main">
    {#each new Array(4) as _, index2}
      <Column {t} index={index2 + 1} parentIndex={index} />
    {/each}
  </div>
</div>

<style lang="scss">
  .service {
    margin: 2.8em 0 0 0;
    padding: 1.6em 1.88em 2.2em 1.88em;
    width: 100%;
    max-width: 22.25em;
    min-width: 22.25em;

    background: var(--primary);
    box-shadow: 0px 4px 103px 0px rgba(0, 0, 0, 0.19);
    border-radius: 1.37em;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 0 2em 0;
  }

  .type {
    display: flex;
    align-items: center;

    img {
      margin: -0.05em 0.66em 0 0;

      width: 1.57em;
      height: 1.63em;
    }

    h3 {
      font-size: 1.04em;
      font-weight: 600;
      color: var(--second);
    }

    h5 {
      margin: -0.17em 0 0 0;

      font-size: 0.82em;
      font-weight: 300;
      color: var(--services-sub);
    }
  }

  .help {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2em;
    height: 2em;

    border-radius: 50%;
    background: var(--accent);
    text-decoration: none;

    h6 {
      margin: -1.05px 0 0 0;

      font-size: 0.965em;
      font-weight: 500;
      color: var(--primary);
    }
  }
</style>
