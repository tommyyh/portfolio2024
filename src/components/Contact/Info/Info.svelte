<script>
  export let t;

  const lang = 'contact.info';
</script>

<section>
  <ul>
    <li><a href="tel:797602438">{$t(`${lang}.tel`)}</a></li>
    <li><a href="mailto:tommyyhoangg@gmail.com">{$t(`${lang}.mail`)}</a></li>
    <li>{$t(`${lang}.location`)}</li>
  </ul>
</section>

<style lang="scss">
  section {
    padding: 4em var(--padding) 0 var(--padding);

    li {
      margin: 0.45em 0 0 0;

      font-size: 1.12em;
      list-style-type: none;
      color: var(--sub2);
    }

    a {
      color: var(--sub2);
      text-decoration: none;
    }
  }

  @media all and (min-width: 1025px) {
    section {
      padding: 1.79em var(--padding) 0 var(--padding);

      li {
        margin: 0.45em 0 0 0;

        font-size: 1.19em;
        list-style-type: none;
        color: var(--sub2);
      }

      a {
        color: var(--sub2);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
