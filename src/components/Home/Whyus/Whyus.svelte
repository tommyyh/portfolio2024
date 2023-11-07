<script>
  export let t;
  import Reason from './Reason.svelte';
</script>

<div class="cont">
  <section>
    <div class="content">
      <div>
        <h4>{$t('home.whyUs.sub')}</h4>
        <h2>{$t('home.whyUs.title')}</h2>
      </div>

      <p>{$t('home.whyUs.text')}</p>
    </div>

    <div class="reasons">
      <Reason
        title={$t('home.whyUs.reason1.title')}
        text={$t('home.whyUs.reason1.text')}
        cta={$t('home.whyUs.reason1.cta')}
      />

      <Reason
        title={$t('home.whyUs.reason2.title')}
        text={$t('home.whyUs.reason2.text')}
        cta={$t('home.whyUs.reason2.cta')}
      />

      <Reason
        title={$t('home.whyUs.reason3.title')}
        text={$t('home.whyUs.reason3.text')}
        cta={$t('home.whyUs.reason3.cta')}
      />
    </div>
  </section>
</div>

<style lang="scss">
  section {
    padding: 7.35em var(--padding) 7em var(--padding);
    overflow: hidden;

    h4 {
      font-size: 1em;
      font-weight: 400;
      color: var(--sub);
    }

    h2 {
      margin: 0.07em 10% 0 0;

      font-size: 1.78em;
      font-weight: 700;
      line-height: 112%;
      color: var(--second);
    }

    p {
      margin: 1.26em 0 0 0;

      font-size: 0.93em;
      font-weight: 400;
      line-height: 140%;
      color: var(--text);
    }
  }

  .reasons {
    margin: 3em 0 0 0;

    border-radius: 1.31em;
    box-shadow: 0px 4px 73px 0px rgba(0, 0, 0, 0.14);
  }

  @media all and (min-width: 1025px) {
    .cont {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    section {
      padding: 8.35em var(--padding2) 7em var(--padding2);
      width: var(--width);
      overflow: initial;

      h4 {
        font-size: 1.13rem;
        font-weight: 400;
        color: var(--sub);
      }

      h2 {
        margin: 0.07em 10% 0 0;

        font-size: 2.25rem;
        font-weight: 700;
        line-height: 112%;
        color: var(--second);
      }

      p {
        margin: 1.3em 1rem 0 0;

        font-size: 1.11rem;
        font-weight: 400;
        line-height: 140%;
        color: var(--text);
      }
    }

    .content {
      display: grid;
      grid-template-columns: 50% 58%;

      width: 68%;
      position: relative;
      transform: translateX(-50%);
      left: 50%;
    }

    .reasons {
      display: flex;
      margin: 4em 0 0 0;

      border-radius: 2.44em;
      box-shadow: 0px 4px 73px 0px rgba(0, 0, 0, 0.14);
    }
  }
</style>
