<script>
  export let t;
  export let index;
  import chevronDownSVG from '$lib/images/chevron-down.svg';

  $: open = false;
  const lang = `home.faq.list.${index}`;

  const onClick = () => {
    open = !open;
  };
</script>

<div class={open ? 'question question-open' : 'question'} on:click={onClick}>
  <div class="main">
    <div class="left">
      <h3>{$t(`${lang}.title`)}</h3>
      <h6>{$t(`${lang}.sub`)}</h6>
    </div>

    <div class="cta">
      <img src={chevronDownSVG} alt="chevron down" />
    </div>
  </div>

  <p class={open ? 'answer answer-active' : 'answer'}>
    {$t(`${lang}.text`)}
  </p>
</div>

<style lang="scss">
  .question {
    width: 100%;
    margin: 0.85em 0 0 0;
    padding: 1.35em 2em;

    border-radius: 5em;
    box-shadow: 0px 4px 73px 0px rgba(0, 0, 0, 0.14);
    transition: ease 300ms;

    &:first-child {
      margin: 2.8em 0 0 0;
    }

    // &:nth-child(2) .cta {
    //   background: var(--faq-2);
    // }

    // &:nth-child(3) .cta {
    //   background: var(--faq-3);
    // }

    // &:nth-child(5) .cta {
    //   background: var(--faq-2);
    // }

    // &:nth-child(6) .cta {
    //   background: var(--faq-3);
    // }
  }

  .question-open {
    padding: 1.68em 2em;

    border-radius: 0.9em;
  }

  .left {
    margin: 0 2em 0 0;
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    h3 {
      line-height: 1.2em;
      font-size: 1.1em;
      font-weight: 500;
      color: var(--faq-title);
    }

    h6 {
      margin: 3px 0 0 0;

      font-size: 0.81em;
      font-weight: 300;
      color: var(--faq-sub);
    }
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 2.37em;
    min-height: 2.37em;

    background: var(--accent);
    border-radius: 50%;

    img {
      margin: 0 0 0 -1px;
      width: 0.83em;
      height: 0.66em;
    }
  }

  // Answer
  .answer {
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
    margin-top: 0;

    font-size: 0.98em;
    color: var(--text);
    transition: ease 300ms;
  }

  .answer-active {
    width: initial;
    height: initial;
    margin-top: 1.5em;

    opacity: initial;
    visibility: initial;
  }
</style>
