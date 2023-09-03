<script>
  import ArrowRightSvg from '$lib/images/arrow-right.svg';
  export let title;
  export let text;
  export let cta;
  export let ctaOpen;

  let ctaEl;
  let reasonEl;
  $: ctaOpen = false;

  const onClick = (e) => {
    ctaOpen = !ctaOpen;

    const rect = reasonEl.getBoundingClientRect(); // Get bounding rect of .reason container

    ctaEl.style.left = `${e.clientX - rect.left - ctaEl.offsetWidth / 1.33}px`; // Calculate relative X position
    ctaEl.style.top = `${e.clientY - rect.top - 45}px`; // Calculate relative Y position
  };
</script>

<div class="reason" bind:this={reasonEl} on:click={onClick}>
  <h3>{title}</h3>
  <p>{text}</p>

  <a href="/" class={ctaOpen ? 'cta cta-active' : 'cta'} bind:this={ctaEl}>
    <h5>{cta}</h5>
    <img src={ArrowRightSvg} alt="arrow right" />
  </a>
</div>

<style lang="scss">
  .reason {
    padding: 1.8em 2em;
    position: relative;

    h3 {
      color: var(--second);
      font-size: 1.1em;
      font-weight: 500;
    }

    p {
      margin: 0.7em 0 0 0;

      font-size: 0.86em;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2.8px;

      background: linear-gradient(
        180deg,
        rgba(251, 251, 251, 0.9) 14.58%,
        rgba(228, 228, 228, 0.3) 58.7%,
        rgba(251, 251, 251, 0.9) 83.85%
      );
    }
  }

  // Cta
  .cta {
    display: flex;
    align-items: center;

    transform: scale(0);
    padding: 0;
    position: absolute;

    background: var(--cta-bg);
    border-radius: 0.4em;
    transition: 250ms ease;
    opacity: 0;
    text-decoration: none;

    img {
      margin: 0 0 0 0.5em;
      width: 0.44em;
    }

    h5 {
      white-space: nowrap;
      font-size: 0.8em;
      font-weight: 500;
      color: var(--cta-title);
    }
  }

  .cta-active {
    padding: 0.6em 1.1em;
    transform: scale(1);

    opacity: 1;
  }
</style>
