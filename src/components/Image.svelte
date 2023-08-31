<script>
  import { onMount } from 'svelte';

  export let blurredSrc;
  export let src;
  export let customClass = '';
  export let alt = '';

  $: imgSrc = blurredSrc || src;

  onMount(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imgSrc = src;
    };
  });

  let newClass = blurredSrc && imgSrc === blurredSrc ? 'loading' : 'loaded';
</script>

<img src={imgSrc} {alt} class={`${customClass} ${newClass}`} />

<style lang="scss">
  // When image is loading - blur effect
  .loading {
    filter: blur(10px);
    -webkit-filter: blur(10px);
    clip-path: inset(0);
  }

  .loaded {
    filter: blur(0);
    -webkit-filter: blur(0);
    transition: filter 0.5s linear;
  }
</style>
