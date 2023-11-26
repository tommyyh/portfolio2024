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

  @media all and (min-width: 1025px) {
    a {
      display: flex;
      align-items: center;

      color: var(--second);
    }

    .img {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2.1rem;
      height: 2.1rem;

      border-radius: 50%;
      background: var(--second);
    }

    p {
      margin: -1px 0 0 0.7rem;

      color: var(--second);
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
</style>
