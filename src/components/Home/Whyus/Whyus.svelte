<script>
  export let t;
  import Reason from './Reason.svelte';
</script>

<section>
  <h4>{$t('home.whyUs.sub')}</h4>
  <h2>{$t('home.whyUs.title')}</h2>
  <p>{$t('home.whyUs.text')}</p>

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
</style>
