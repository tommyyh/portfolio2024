<script>
  export let t;
  export let index;
  export let allOpen;
  import chevronDownSVG from '$lib/images/chevron-down.svg';

  const lang = `home.faq.list.${index}`;

  const onClick = () => {
    if (allOpen[index]) {
      allOpen = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      };
    } else {
      allOpen = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      };
      allOpen = { ...allOpen, [index]: true };
    }
  };
</script>

<div
  class={allOpen[index] ? 'question question-open' : 'question'}
  on:click={onClick}
>
  <div class="main">
    <div class="left">
      <h3>{$t(`${lang}.title`)}</h3>
      <h6>{$t(`${lang}.sub`)}</h6>
    </div>

    <div class="cta">
      <img src={chevronDownSVG} alt="chevron down" />
    </div>
  </div>

  <p class={allOpen[index] ? 'answer answer-active' : 'answer'}>
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
  }

  .question-open {
    padding: 1.68em 2em;

    border-radius: 0.9em;

    img {
      transform: rotate(180deg);
    }
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
      position: relative;
      margin: 0 0 0 -1px;
      width: 0.83em;
      height: 0.66em;

      transition: ease 450ms;
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

  @media all and (min-width: 1025px) {
    .question {
      max-height: 6.545625rem;
      width: 96.3%;
      margin: 1.1em 0 0 0;
      padding: 1.9em 2em 1.9em 3em;

      border-radius: 5em;
      box-shadow: 0px 4px 73px 0px rgba(0, 0, 0, 0.14);
      transition: ease 300ms;
      cursor: pointer;
      transition: 300ms ease;

      &:hover {
        box-shadow: 0px 4px 74px 0px rgba(0, 0, 0, 0.3);
      }

      &:first-child {
        margin: 0.85em 0 0 0;
      }
    }

    .left {
      margin: 0 2em 0 0;
    }

    .main {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      height: initial;

      h3 {
        line-height: 1.2em;
        font-size: 1.3em;
        font-weight: 500;
        color: var(--faq-title);
        user-select: none;
      }

      h6 {
        margin: 0 0 0 0;

        font-size: 0.9em;
        font-weight: 300;
        color: var(--faq-sub);
        user-select: none;
      }
    }

    .cta {
      display: flex;
      align-items: center;
      justify-content: center;

      min-width: 2.7em;
      min-height: 2.7em;

      background: var(--accent);
      border-radius: 50%;
      user-select: none;

      img {
        margin: 0 0 0 -1px;
        width: 0.83em;
        height: 0.66em;
      }
    }

    .question-open {
      max-height: initial;
      padding: 1.68em 2em;

      border-radius: 0.9em;

      h6 {
        margin: 0 0 1.5rem 0;
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
      // transition: ease 300ms;
      transition: none;
      user-select: none;
    }

    .answer-active {
      width: initial;
      height: initial;
      margin-top: 0em;

      opacity: initial;
      visibility: initial;
    }
  }
</style>
