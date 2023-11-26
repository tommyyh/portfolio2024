<script>
  import AdonioPng from '$lib/images/projects/adonio.png';
  import EliteEdgePng from '$lib/images/projects/edge.png';
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
  import JubefaMainPng from '$lib/images/projects/jubefa-main.png';
  import JubefaMainPngBlurred from '$lib/images/projects/blurred/jubefa-main.jpg';
  import Image from './Image.svelte';
  import { onMount } from 'svelte';

  let images = [
    {
      src: JubefaMainPng,
      blurredSrc: JubefaMainPngBlurred,
      alt: 'Jubefa',
      link: 'https://jubefa-main.vercel.app/en',
    },
    {
      src: AdonioPng,
      blurredSrc: AdonioPngBlurred,
      alt: 'Adonio Store',
      link: 'https://www.adonio.cz/',
    },
    {
      src: EliteEdgePng,
      blurredSrc: EliteEdgePngBlurred,
      alt: 'Elite Edge Gym',
      link: 'https://edge-omega.vercel.app/',
    },
    {
      src: JubefaConstructionPng,
      blurredSrc: JubefaConstructionPngBlurred,
      alt: 'Jubefa Construction Real Estate',
      link: 'https://www.jubefa-constructions.com/en/',
    },
    {
      src: JubefaImmobilienPng,
      blurredSrc: JubefaImmobilienPngBlurred,
      alt: 'Jubefa Immobilien Real Estate',
      link: 'https://www.jubefa-immobilien.de/en',
    },
    {
      src: OnteePng,
      blurredSrc: OnteePngBlurred,
      alt: 'Ontee golf all over the world',
      link: 'https://www.ontee.com/en/',
    },
    {
      src: RimmingtonPng,
      blurredSrc: RimmingtonPngBlurred,
      alt: 'Rimmington pharmacy in Bradford',
      link: 'https://rimmington.vercel.app/',
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
      <a href={image.link} target="_blank">
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
      <a href={image.link} target="_blank">
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

  @media all and (min-width: 1025px) {
    section {
      display: flex;
      // overflow-x: scroll;
      overflow-x: hidden;

      // width: (38.31rem * 6) + (1.2rem * 6);
      padding: 0 0 0.8rem 0;
      margin: 1.5em 0 0 0;
      box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.23);

      /* width */
      &::-webkit-scrollbar {
        height: 9px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #ececec;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #ffffff;
        border-radius: 1rem;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #f5f5f5;
      }
    }

    // First showcase
    .showcase1 {
      display: flex;
      overflow-x: initial;
      box-shadow: none;

      a {
        margin: 0;
      }
    }

    .showcase1 :global(.showcase1-image) {
      height: 22.75rem;
      object-fit: cover;
      width: 38.31rem;
      margin: 0 1.2rem 0 0;

      box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.23);
    }

    // First showcase
    .showcase2 {
      display: flex;

      overflow-x: initial;
      margin: 0em 0 0 0;

      box-shadow: none;

      a {
        margin: 0;
      }
    }

    .showcase2 :global(.showcase2-image) {
      height: 22.75rem;
      object-fit: cover;
      width: 38.31rem;
      margin: 0 1.2rem 0 0;

      box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.23);
    }
  }
</style>
