<script>
  export let title;
  export let linkTo;
  export let blank;
  import newWindowSvg from '$lib/images/new-window.svg';
</script>

<a href={linkTo} target={blank == 'true' ? '_blank' : undefined}>
  <div class="img">
    <img src={newWindowSvg} alt="new window" />
  </div>

  <p>{title}</p>
</a>

<style lang="scss">
  a {
    display: flex;
    align-items: center;

    color: var(--second);
  }

  .img {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.04rem;
    height: 2.04rem;

    border-radius: 50%;
    background: var(--second);
  }

  p {
    margin: 0 0 0 0.6rem;

    color: var(--second);
    font-size: 1.04rem;
    font-weight: 600;
  }
</style>
