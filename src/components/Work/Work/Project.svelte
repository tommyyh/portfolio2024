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
    <div>
      <h4>{$t(`${lang}.sub`)}</h4>
      <h1>{$t(`${lang}.title`)}</h1>
    </div>

    <div>
      <p>{$t(`${lang}.text`)}</p>

      <LinkButton
        title={$t(`${lang}.cta.title`)}
        linkTo={$t(`${lang}.cta.linkTo`)}
        blank={$t(`${lang}.cta.blank`)}
      />
    </div>
  </div>

  <div class="images">
    <div class="first first1">
      {#each new Array(2) as _, index}
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

            <div class="open"></div>
          </a>
        {/await}
      {/each}
    </div>

    <div class="first second">
      {#each new Array(2) as _, index}
        {#await importImage($t(`${lang}.image${index + 3}`))}
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

            <div class="open"></div>
          </a>
        {/await}
      {/each}
    </div>
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

  .first {
    display: flex;
  }

  .images :global(.image) {
    width: 19.19rem;
    height: 12.5rem;
    margin: 0 1rem 0 0;

    object-fit: cover;
    box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.25);
  }

  @media all and (min-width: 1025px) {
    main {
      margin: 15.7rem 0 0 0;

      &:first-child {
        margin: 6.2rem 0 0 0;
      }

      &:last-child {
        margin-bottom: 3.2rem;
      }

      a {
        margin: 0 1.9rem 0 0;
        position: relative;
      }
    }

    .second {
      display: flex;
      justify-content: flex-end;

      margin: 1.72rem -1.9rem 0 0;
    }

    .content {
      display: grid;
      grid-template-columns: 47% 48%;
      padding: 0 0 2.5rem 0;

      h4 {
        font-size: 1.1rem;
        font-weight: 400;
        color: var(--dark-sub);
      }

      h1 {
        margin: 0.3rem 0.5rem 0 0;

        font-size: 2.7rem;
        font-weight: 600;
        line-height: 110.5%;
        color: var(--second);
      }

      p {
        margin: 1.8rem 0 2rem 0;

        font-size: 1.18rem;
        line-height: 150.5%;
        font-weight: 400;
        color: var(--text2);
      }
    }

    .images {
      display: initial;

      overflow-x: initial;
      margin: 3rem 0 0 0;
      padding: 0;
      box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.25);
    }

    .images :global(.image) {
      width: 32.94rem;
      height: 18.53rem;
      margin: 0 0 0 0;

      object-fit: cover;
      box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.25);
      transition: 300ms ease;

      &:hover {
        box-shadow: 0px 4px 120px 0px rgba(0, 0, 0, 0.38);
      }
    }
  }
</style>
