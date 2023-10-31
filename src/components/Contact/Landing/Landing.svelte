<script>
  export let t;

  const lang = 'contact.landing';
</script>

<main>
  <h4>{$t(`${lang}.sub`)}</h4>
  <h1>{$t(`${lang}.title`)}</h1>
</main>

<style lang="scss">
  main {
    padding: 5.25em var(--padding) 0 var(--padding);

    h4 {
      font-size: 0.77em;
      font-weight: 500;
      color: var(--sub2);
    }

    h1 {
      margin: 0.12em 0 0.55em -0.05em;

      font-size: 2.25em;
      font-weight: 700;
      color: var(--accent);
      line-height: 108.5%;
    }
  }
</style>
