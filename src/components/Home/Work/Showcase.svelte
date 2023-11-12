<script>
  import AdonioPng from '$lib/images/projects/adonio.png';
  import EliteEdgePng from '$lib/images/projects/elite-edge.png';
  import JubefaConstructionPng from '$lib/images/projects/jubefa-construction.png';
  import JubefaImmobilienPng from '$lib/images/projects/jubefa-immobilien.png';
  import OnteePng from '$lib/images/projects/ontee.png';
  import RimmingtonPng from '$lib/images/projects/rimmington.png';
  import AdonioPngBlurred from '$lib/images/projects/blurred/adonio.png';
  import EliteEdgePngBlurred from '$lib/images/projects/blurred/elite-edge.png';
  import JubefaConstructionPngBlurred from '$lib/images/projects/blurred/jubefa-construction.png';
  import JubefaImmobilienPngBlurred from '$lib/images/projects/blurred/jubefa-immobilien.png';
  import OnteePngBlurred from '$lib/images/projects/blurred/ontee.png';
  import RimmingtonPngBlurred from '$lib/images/projects/blurred/rimmington.png';
  import Image from '../../Image.svelte';
  import { onMount } from 'svelte';

  $: randomImages = [];

  const getRandomProjects = (array, numElements) => {
    // Create a copy of the original array to avoid modifying it
    const copyArray = [...array];

    // Shuffle the copy array using the Fisher-Yates algorithm
    for (let i = copyArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
    }

    // Return the first numElements from the shuffled array
    return copyArray.slice(0, numElements);
  };

  // Usage
  let images = [
    {
      src: AdonioPng,
      blurredSrc: AdonioPngBlurred,
      alt: 'Adonio Store',
      link: '/',
    },
    {
      src: EliteEdgePng,
      blurredSrc: EliteEdgePngBlurred,
      alt: 'Elite Edge Gym',
    },
    {
      src: JubefaConstructionPng,
      blurredSrc: JubefaConstructionPngBlurred,
      alt: 'Jubefa Construction Real Estate',
    },
    {
      src: JubefaImmobilienPng,
      blurredSrc: JubefaImmobilienPngBlurred,
      alt: 'Jubefa Immobilien Real Estate',
    },
    {
      src: OnteePng,
      blurredSrc: OnteePngBlurred,
      alt: 'Ontee golf all over the world',
      link: '/',
    },
    {
      src: RimmingtonPng,
      blurredSrc: RimmingtonPngBlurred,
      alt: 'Rimmington pharmacy in Bradford',
    },
  ];

  onMount(() => {
    randomImages = getRandomProjects(images, 4);
  });
</script>

<div class="showcase">
  <div class="images">
    {#each randomImages.slice(0, 2) as image (image)}
      <Image
        src={image.src}
        alt={image.alt}
        blurredSrc={image.blurredSrc}
        customClass="image"
      />
    {/each}
  </div>
  <div class="images2">
    {#each randomImages.slice(2) as image (image)}
      <Image
        src={image.src}
        alt={image.alt}
        blurredSrc={image.blurredSrc}
        customClass="image2"
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .showcase {
    margin: 5rem 0 0 0;

    overflow-x: hidden;
  }

  // images
  .images,
  .images2 {
    display: flex;
  }

  .images2 {
    margin: 0.85rem 0 0 0;
  }

  .showcase :global(.image) {
    width: 17.94rem;
    height: 10.06rem;
    position: relative;

    &:last-child {
      margin: 0 0 0 0.85rem;

      filter: brightness(58%);
    }
  }

  .showcase :global(.image2) {
    width: 15.25rem;
    height: 8.56rem;
    margin: 0 0 0 -5rem;

    filter: brightness(39%);

    &:last-child {
      margin: 0 0 0 0.85rem;

      filter: brightness(27%);
    }
  }

  @media all and (min-width: 1025px) {
    .showcase {
      display: flex;
      align-items: center;
      margin: 3.78rem 0 6rem 0;

      overflow-x: hidden;
    }

    // images
    .images,
    .images2 {
      display: flex;
      align-items: center;
    }

    .images2 {
      margin: 0rem 0 0 0;
    }

    .showcase :global(.image) {
      width: 32.75rem;
      height: 18.42rem;
      position: relative;

      filter: brightness(58%);

      &:last-child {
        width: 40.9rem;
        height: 23rem;
        margin: 0 0 0 1.8rem;

        filter: brightness(1);
      }
    }

    .showcase :global(.image2) {
      width: 32.75rem;
      height: 18.42rem;
      margin: 0 0 0 1.8rem;

      filter: brightness(39%);

      &:last-child {
        width: 25.19rem;
        height: 14.16rem;
        margin: 0 0 0 1.8rem;

        filter: brightness(27%);
      }
    }
  }
</style>
