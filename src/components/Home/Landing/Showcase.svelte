<script>
  import AdonioPng from '$lib/images/projects/adonio.png';
  import EliteEdgePng from '$lib/images/projects/elite-edge.png';
  import JubefaConstructionPng from '$lib/images/projects/jubefa-construction.png';
  import JubefaImmobilienPng from '$lib/images/projects/jubefa-immobilien.png';
  import OnteePng from '$lib/images/projects/ontee.png';
  import RimmingtonPng from '$lib/images/projects/rimmington.png';
  export let t;
  import { onMount } from 'svelte';

  let images = [
    AdonioPng,
    EliteEdgePng,
    JubefaConstructionPng,
    JubefaImmobilienPng,
    OnteePng,
    RimmingtonPng,
  ];
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
  });
</script>

<section>
  <div class="showcase1">
    {#each showcase1Images as image (image)}
      <img src={image} alt="" />
    {/each}
  </div>

  <div class="showcase2">
    {#each showcase2Images as image (image)}
      <img src={image} alt="" />
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    padding: 3em 0 0 0;

    img {
      box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.37);
    }
  }

  // First showcase
  .showcase1 {
    display: flex;
    overflow-x: hidden;
    box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.37);

    img {
      width: 73.59%;
      margin: 0 0 0 0.8em;

      &:first-child {
        margin: 0;
      }
    }
  }

  // First showcase
  .showcase2 {
    display: flex;
    box-shadow: 0px 4px 170px 0px rgba(0, 0, 0, 0.37);

    overflow-x: hidden;
    margin: 0.8em 0 0 0;

    img {
      width: 62.56%;
      margin: 0 0 0 0.8em;

      &:first-child {
        margin: 0;
      }
    }
  }
</style>
