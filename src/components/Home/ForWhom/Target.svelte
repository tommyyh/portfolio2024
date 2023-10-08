<script>
  export let t;
  export let index;
  import chevronRightSvg from '$lib/images/chevron-right.svg';

  const lang = `home.forWhom.list.${index}`;
</script>

<div class="target">
  <div>
    <h3>{$t(`${lang}.title`)}</h3>
    <p>{$t(`${lang}.text`)}</p>
  </div>

  <a href="/contact" class="cta">
    <img src={chevronRightSvg} alt="chevron right" />
  </a>
</div>

<style lang="scss">
  .target {
    display: grid;
    grid-template-columns: 70% 30%;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 1.2em 1.3em 1.5em 1.5em;
    margin: 1.6em 0 0 0;

    border-radius: 0.69em;
    box-shadow: 0px 4px 73px 0px rgba(0, 0, 0, 0.13);
    background: var(--primary);

    &::before {
      content: 'A';
      position: absolute;
      left: -0.15em;
      margin: -1.33em 0 0 0;
      z-index: -1;

      color: var(--forWhom-faded);
      font-weight: 500;
      font-size: 7.5em;
    }

    &:last-child::before {
      content: 'B';
    }

    h3 {
      font-size: 1.15em;
      font-weight: 600;
      color: var(--forWhom-title);
    }

    p {
      margin: 0.7em 3em 0 0;

      font-size: 0.83em;
      font-weight: 400;
      color: var(--text);
    }
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 5.18em;
    width: 5.18em;

    background: var(--forWhom-bg);
    border-radius: 0.67em;

    img {
      margin: 0 0 0 -3px;
      width: 1.15em;
    }
  }
</style>
