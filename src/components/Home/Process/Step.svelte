<script>
  export let t;
  export let index;

  const lang = `home.process.list.${index}`;
</script>

<div class="step-parent">
  <div class="num">
    <h4>{index}</h4>
  </div>

  <div class="step">
    <h3>{$t(`${lang}.title`)}</h3>
    <p>{$t(`${lang}.text`)}</p>
  </div>
</div>

<style lang="scss">
  .step-parent {
    margin: 1.8em 0 0 0;

    &:first-child {
      margin: 3em 0 0 0;

      & .step {
        box-shadow: 0px 4px 127px 0px rgba(255, 255, 255, 0.33);

        h3 {
          color: var(--process1-title);
        }

        p {
          color: var(--process1-text);
        }
      }
    }

    &:nth-child(2) .step {
      background: var(--process2-bg);
      box-shadow: 0px 4px 120px 0px rgba(255, 255, 255, 0.14);

      h3 {
        color: var(--process2-title);
        font-weight: 400;
      }

      p {
        color: var(--process2-text);
        font-weight: 300;
      }
    }

    &:nth-child(3) .step {
      background: var(--process3-bg);
      box-shadow: 0px 4px 120px 0px rgba(255, 255, 255, 0.08);

      h3 {
        color: var(--process3-title);
        font-weight: 400;
      }

      p {
        color: var(--process3-text);
        font-weight: 300;
      }
    }

    &:last-child .step {
      background: var(--process4-bg);

      h3 {
        color: var(--process4-title);
        font-weight: 400;
      }

      p {
        color: var(--process4-text);
        font-weight: 300;
      }
    }
  }

  .step {
    padding: 1.89em 1.8em 2.08em 2.2em;
    position: relative;

    background: var(--process1-bg);
    border-radius: 0.8em;

    h3 {
      margin: 0 2em 0 0;

      font-size: 1.17em;
      font-weight: 500;
    }

    p {
      margin: 1em 0 0 0;

      font-size: 0.9em;
      font-weight: 400;
      letter-spacing: -0.2px;
      line-height: 147%;
    }
  }

  .num {
    width: 100%;
    height: 2.9em;

    h4 {
      margin: 0 0 0 0.36em;

      line-height: 0.7em;
      color: #141414;
      font-size: 6.93em;
      font-weight: 500;
    }
  }
</style>
