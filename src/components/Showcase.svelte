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
  import Image from './Image.svelte';
  import { onMount } from 'svelte';

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
      link: '/',
    },
    {
      src: JubefaConstructionPng,
      blurredSrc: JubefaConstructionPngBlurred,
      alt: 'Jubefa Construction Real Estate',
      link: '/',
    },
    {
      src: JubefaImmobilienPng,
      blurredSrc: JubefaImmobilienPngBlurred,
      alt: 'Jubefa Immobilien Real Estate',
      link: '/',
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
      link: '/',
    },
  ];
  let showcase1El;
  let showcase2El;
  let sectionEl;
  $: inView = true;
  $: showcase1Images = [];
  $: showcase2Images = [];

  // Shuffle images to show them randomly
  const shuffleArray = (array) => {
    let shuffled = array.slice();

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  onMount(() => {
    const shuffledImages = shuffleArray(images);

    showcase1Images = shuffledImages.slice(0, 3);
    showcase2Images = shuffledImages.slice(3);

    // Set the initial scroll position for showcase2
    setTimeout(() => {
      showcase2El.scrollLeft =
        showcase2El.scrollWidth - showcase2El.offsetWidth;
    }, 75);

    // On scroll move images
    let scrollPosition = 0;

    const handleScroll = () => {
      if (!inView) return; // If its not in view then stop - performance

      const scrollAmount = window.scrollY - scrollPosition;

      showcase1El.scrollLeft += scrollAmount * 1.3;
      showcase2El.scrollLeft -= scrollAmount * 0.8;

      scrollPosition = window.scrollY;
    };

    // Handle if its visible
    const handleVisibility = () => {
      const boundingRect = sectionEl.getBoundingClientRect();
      inView =
        boundingRect.top <= window.innerHeight && boundingRect.bottom >= 0;
    };

    document.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleVisibility);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleVisibility);
    };
  });
</script>

<section bind:this={sectionEl}>
  <div class="showcase1" bind:this={showcase1El}>
    {#each showcase1Images as image (image)}
      <a href={image.link}>
        <Image
          src={image.src}
          alt={image.alt}
          blurredSrc={image.blurredSrc}
          customClass="showcase1-image"
        />
      </a>
    {/each}
  </div>

  <div class="showcase2" bind:this={showcase2El}>
    {#each showcase2Images as image (image)}
      <a href={image.link}>
        <Image
          src={image.src}
          alt={image.alt}
          blurredSrc={image.blurredSrc}
          customClass="showcase2-image"
        />
      </a>
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    padding: 3em 0 0 0;
  }

  // First showcase
  .showcase1 {
    display: flex;
    overflow-x: hidden;
    box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.37);

    a {
      margin: 0 0 0 0.8em;

      &:first-child {
        margin: 0;
      }
    }
  }

  .showcase1 :global(.showcase1-image) {
    width: 73.59%;
    min-width: 17.94em;

    box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.37);
  }

  // First showcase
  .showcase2 {
    display: flex;

    overflow-x: hidden;
    margin: 0.8em 0 0 0;

    box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.37);

    a {
      margin: 0 0 0 0.8em;

      &:first-child {
        margin: 0;
      }
    }
  }

  .showcase2 :global(.showcase2-image) {
    width: 73.59%;
    min-width: 15.25em;

    box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.37);
  }
</style>
