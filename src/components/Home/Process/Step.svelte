<script>
  export let t;
  export let index;

  const lang = `home.process.list.${index}`;
</script>

<div class="step">
  <h3>{$t(`${lang}.title`)}</h3>
  <p>{$t(`${lang}.text`)}</p>
</div>

<style lang="scss">
  .step {
    margin: 4.35em 0 0 0;
    padding: 1.86em 1.95em 1.93em 1.95em;
    position: relative;

    background: var(--process1-bg);
    border-radius: 0.8em;

    h3 {
      font-size: 1.17em;
      font-weight: 500;
    }

    p {
      margin: 0.67em 0 0 0;

      font-size: 0.9em;
      font-weight: 400;
      letter-spacing: -0.2px;
    }

    &::before {
      content: '1';
      position: absolute;
      top: -0.7em;
      z-index: 1;

      color: #141414;
      font-size: 6.93em;
      font-weight: 500;
    }

    &:first-child {
      margin: 5.3em 0 0 0;

      box-shadow: 0px 4px 127px 0px rgba(255, 255, 255, 0.33);

      h3 {
        color: var(--process1-title);
      }

      p {
        color: var(--process1-text);
      }
    }
  }
</style>
