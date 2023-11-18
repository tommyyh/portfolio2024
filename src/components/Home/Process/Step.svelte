<script>
  export let t;
  export let index;

  const lang = `home.process.list.${index}`;
</script>

<div class={`step-parent step-parent${index}`}>
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

  // Specific
  .step-parent1 {
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

  .step-parent2 {
    .step {
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
  }

  .step-parent3 {
    .step {
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
  }

  .step-parent4 {
    .step {
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

  @media all and (min-width: 1025px) {
    .step-parent {
      margin: 0 0 0 0;
    }

    .step {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 0 3.2rem;
      width: 31.5rem;
      height: 13.5rem;
      position: relative;

      background: var(--process1-bg);
      border-radius: 0.81em;

      h3 {
        margin: 0 2em 0 0;

        font-size: 1.38em;
        font-weight: 600;
      }

      p {
        margin: 0.5em 0 0 0;

        font-size: 1.16em;
        font-weight: 400;
        letter-spacing: -0.2px;
        line-height: 147%;
      }
    }

    .num {
      width: fit-content;
      height: 2.9em;

      h4 {
        margin: 0 0 0 0.36em;

        line-height: 0.7em;
        color: #191919;
        font-size: 6.93em;
        font-weight: 500;
      }
    }

    // Specific
    .step-parent1 {
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

      .num {
        position: absolute;

        h4 {
          margin: 2.4rem 0 0 -4.8rem;
          font-size: 11rem;
          color: #191919;
        }
      }
    }

    .step-parent2 {
      margin: 0 0 0 1.8rem;

      .step {
        width: 28rem;
        height: 12.25rem;
        padding: 0 2.1rem;

        background: var(--process2-bg);
        box-shadow: 0px 4px 120px 0px rgba(255, 255, 255, 0.14);

        h3 {
          font-size: 1.25rem;
          color: var(--process2-title);
          font-weight: 400;
        }

        p {
          font-size: 1.06rem;
          color: var(--process2-text);
          font-weight: 300;
        }
      }

      .num {
        position: absolute;

        h4 {
          margin: -2.8rem 0 0 25.54rem;
          font-size: 9rem;
          color: #191919;
        }
      }
    }

    .step-parent3 {
      margin: 0 1.8rem;

      .step {
        width: 26.81rem;
        height: 11.4rem;
        padding: 0 1.8rem;

        background: var(--process3-bg);
        box-shadow: 0px 4px 120px 0px rgba(255, 255, 255, 0.08);

        h3 {
          font-size: 1.19rem;
          color: var(--process3-title);
          font-weight: 400;
        }

        p {
          font-size: 1rem;
          color: var(--process3-text);
          font-weight: 300;
        }
      }

      .num {
        position: absolute;

        h4 {
          margin: 5.5rem 0 0 -3.67rem;
          font-size: 10rem;
          color: #191919;
        }
      }
    }

    .step-parent4 {
      .step {
        width: 23.9rem;
        height: 10.3rem;
        padding: 0 1.8rem;

        background: var(--process4-bg);

        h3 {
          font-size: 1.06rem;
          color: var(--process4-title);
          font-weight: 400;
        }

        p {
          font-size: 0.88rem;
          color: var(--process4-text);
          font-weight: 300;
        }
      }

      .num {
        position: absolute;

        h4 {
          margin: -1.5rem 0 0 21.7rem;
          font-size: 10rem;
          color: #191919;
        }
      }
    }
  }
</style>
