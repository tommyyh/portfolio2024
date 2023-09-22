<script>
  import CodeSvg from '$lib/images/services/service/code.svg';
  export let t;
  export let index;
  export let parentIndex;

  const lang = `home.services.list.${parentIndex}.list`;
  const imgName = $t(`${lang}.${index}.img`);

  const importImage = async (imageName) => {
    const module = await import(
      `../../../lib/images/services/service/${imageName}.svg`
    );
    return module.default;
  };
</script>

<div class="service">
  <div class="ill">
    {#await importImage(imgName)}
      <img src={CodeSvg} alt="Service illustration" />
    {:then imageSrc}
      <img src={imageSrc} alt="Service illustration" />
    {:catch}
      <img src={CodeSvg} alt="Service illustration" />
    {/await}
  </div>

  <div class="content">
    <h4>{$t(`${lang}.${index}.title`)}</h4>
    <h6>{$t(`${lang}.${index}.sub`)}</h6>
  </div>
</div>

<style lang="scss">
  .service {
    display: flex;
    align-items: center;

    width: 100%;
    height: 4.17em;
    margin: 0.8em 0 0 0;
    padding: 0 0.9em;

    background: var(--services-bg);
    border-radius: 10em;
  }

  .ill {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.6875em;
    height: 2.6875em;

    border-radius: 50%;
    background: var(--primary);

    img {
      width: 1.1875em;
    }
  }

  .content {
    margin: 0 0 0 0.9em;

    h4 {
      font-weight: 600;
      font-size: 1.02em;
      line-height: 100%;
      color: var(--second);
    }

    h6 {
      margin: -1.2px 0 0 0;

      font-size: 0.83em;
      font-weight: 300;
      color: var(--services-sub2);
    }
  }
</style>
