<script>
  export let t;

  const lang = 'contact.form';
</script>

<main>
  <form action="https://app.formbold.com/s/3jPnD" method="POST">
    <div class="field">
      <input
        placeholder={$t(`${lang}.name`)}
        type="text"
        name="name"
        id="name"
        required
      />
    </div>

    <div class="field">
      <input
        placeholder={$t(`${lang}.mail`)}
        type="email"
        name="email"
        id="email"
        required
      />
    </div>

    <div class="field">
      <select name="service" id="service">
        <option value="new">{$t(`${lang}.service1`)}</option>
        <option value="redesign">{$t(`${lang}.service2`)}</option>
      </select>
    </div>

    <div class="field">
      <input placeholder={$t(`${lang}.url`)} type="text" name="url" id="url" />
    </div>

    <div class="field">
      <textarea
        name="message"
        id="message"
        placeholder={$t(`${lang}.msg`)}
        required
      />
    </div>

    <button type="submit">{$t(`${lang}.cta`)}</button>
  </form>
</main>

<style lang="scss">
  main {
    padding: 0.2em var(--padding) 0 var(--padding);

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

    button {
      margin: 0.8em 0 0 0;
      width: 100%;
      height: 3.6em;
      padding: 0 1.7em;

      background: var(--accent);
      border-radius: 4em;
      border: none;
      font-size: 1.04em;
      font-weight: 500;
      color: var(--primary);
    }
  }

  .field {
    margin: 0.8em 0 0 0;
    position: relative;

    input,
    select {
      width: 100%;
      height: 3.81em;
      padding: 0 1.7em;

      background: var(--primary);
      border-radius: 4em;
      border: none;
      box-shadow: 0px 4px 65px 0px rgba(0, 0, 0, 0.18);

      // Input
      font-size: 1em;
      font-weight: 500;
      color: var(--input-label);

      &::placeholder {
        font-size: 0.95em;
        font-weight: 500;
        color: var(--input-label);
      }
    }

    select {
      padding: 0 1.3em;
      border-right: 1.3em solid transparent;
    }

    textarea {
      width: 100%;
      height: 9.5em;

      background: var(--primary);
      border-radius: 1.4em;
      border: none;
      box-shadow: 0px 4px 65px 0px rgba(0, 0, 0, 0.18);
      resize: none;

      // Input
      padding: 1.33em 1.7em;

      font-family: var(--font-family);
      font-size: 1em;
      font-weight: 500;
      color: var(--input-label);

      &::placeholder {
        font-size: 0.95em;
        font-weight: 500;
        color: var(--input-label);
      }
    }
  }
</style>
