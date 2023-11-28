<script script>
  export let title;
  export let linkTo;
  export let blank;
  import newWindowSvg from '$lib/images/new-window.svg';
</script>

<a href={linkTo} target={blank == 'true' ? '_blank' : undefined}>
  <div class="img">
    <img src={newWindowSvg} alt="new window" />
  </div>

  <div class="bg"></div>

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
      width: fit-content;
      position: relative;

      color: var(--second);
      transition: 300ms ease;
    }

    .img {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2.1rem;
      height: 2.1rem;

      border-radius: 50%;
      background: var(--second);

      img {
        transition: 300ms ease;
      }
    }

    p {
      margin: -1px 0 0 0.7rem;

      color: var(--second);
      font-size: 1.1rem;
      font-weight: 600;
      transition: 300ms ease;
    }

    .bg {
      width: 0%;
      height: 100%;
      position: absolute;
      left: 7.5%;
      top: 0;
      z-index: -1;

      border-top-right-radius: 25rem;
      border-bottom-right-radius: 25rem;
      border-top-left-radius: 11rem;
      border-bottom-left-radius: 11rem;
      // border-radius: 9rem;
      background: var(--accent);
      transition: 335ms ease;
    }

    a {
      &:hover {
        .bg {
          width: 93.5%;
        }

        & img {
          margin: 0.2px 0 0 0.6rem;
        }

        & p {
          color: #e7e7e7;
          margin: 1.1px 1rem 0 0.48rem;

          font-size: 0.93rem;
          font-weight: 400;
        }
      }
    }
  }
</style>
