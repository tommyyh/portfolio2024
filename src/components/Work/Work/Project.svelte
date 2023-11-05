<script>
  export let t;
  export let index;
  import LinkButton from '../../LinkButton/LinkButton.svelte';
  import jubefaMain1PngBlurred from '$lib/images/work/blurred/jubefa-main1.jpg';
  import Image from '../../Image.svelte';

  const lang = `work.work.list.${index}`;

  const importImage = async (imageName) => {
    const module = await import(`../../../lib/images/work/${imageName}.png`);
    const module2 = await import(
      `../../../lib/images/work/blurred/${imageName}.jpg`
    );

    return {
      img: module.default,
      imgBlurred: module2.default,
    };
  };
</script>

<main>
  <div class="content">
    <h4>{$t(`${lang}.sub`)}</h4>
    <h1>{$t(`${lang}.title`)}</h1>
    <p>{$t(`${lang}.text`)}</p>

    <LinkButton
      title={$t(`${lang}.cta.title`)}
      linkTo={$t(`${lang}.cta.linkTo`)}
      blank={$t(`${lang}.cta.blank`)}
    />
  </div>

  <div class="images">
    {#each new Array(4) as _, index}
      {#await importImage($t(`${lang}.image${index + 1}`))}
        <a href={$t(`${lang}.webLink`)} target="_blank">
          <img src={jubefaMain1PngBlurred} alt="Service illustration" />
        </a>
      {:then imageSrc}
        <a href={$t(`${lang}.webLink`)} target="_blank">
          <Image
            blurredSrc={imageSrc.imgBlurred}
            src={imageSrc.img}
            alt={'efefefe'}
            customClass="image"
          />
        </a>
      {/await}
    {/each}
  </div>
</main>

<style lang="scss">
  main {
    margin: 10.2rem 0 0 0;

    &:first-child {
      margin: 6.2rem 0 0 0;
    }

    &:last-child {
      margin-bottom: 3.2rem;
    }
  }

  .content {
    padding: 0 var(--padding);

    h4 {
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--dark-sub);
    }

    h1 {
      margin: 0.13rem 0 0 0;

      font-size: 1.88rem;
      font-weight: 600;
      line-height: 110.5%;
      color: var(--second);
    }

    p {
      margin: 1.13rem 0 2rem 0;

      font-size: 0.94rem;
      line-height: 150.5%;
      font-weight: 400;
      color: var(--text2);
    }
  }

  .images {
    display: flex;

    overflow-x: scroll;
    margin: 3rem 0 0 0;
    padding: 0 0 0 var(--padding);
    box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.25);
  }

  .images :global(.image) {
    width: 19.19rem;
    height: 12.5rem;
    margin: 0 1rem 0 0;

    object-fit: cover;
    box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.25);
  }
</style>
