<script>
  import { page } from '$app/stores';
  import { loadTranslations } from '$lib/lang/translations';
  export let t;
  export let servicesScrollToView;
  export let isHome;

  let lang;

  if ($page.url.pathname === '/') {
    lang = 'home.header';
  } else if ($page.url.pathname === '/contact') {
    lang = 'contact.header';
  } else if ($page.url.pathname === '/work') {
    lang = 'work.header';
  } else {
    lang = 'home.header';
  }

  const onChange = async (e) => {
    const locale = e.target.value;

    await loadTranslations(locale, '/'); // keep this just before the `return`
  };
</script>

<nav>
  <ul>
    <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
      <a href="/">{$t(`${lang}.home`)}</a>
    </li>
    <li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
      <a href="/work">{$t(`${lang}.work`)}</a>
    </li>
    {#if isHome}
      <li
        aria-current={$page.url.pathname === '/services' ? 'page' : undefined}
        on:click={servicesScrollToView}
      >
        {$t(`${lang}.services`)}
      </li>
    {:else}
      <li
        aria-current={$page.url.pathname === '/services' ? 'page' : undefined}
      >
        <a href="/">{$t(`${lang}.services`)}</a>
      </li>
    {/if}
  </ul>
</nav>

<div class="right">
  <div class="custom-select">
    <select name="lang" on:change={onChange}>
      <option value="en">{$t(`${lang}.english`)}</option>
      <option value="cs">{$t(`${lang}.czech`)}</option>
    </select>
  </div>

  <a href="/contact" class="cta">{$t(`${lang}.contact`)}</a>
</div>

<style lang="scss">
  // Links
  ul {
    li {
      display: inline;

      padding: 0.5rem 0.9rem;
      font-size: 0.975rem;
      font-weight: 400;
      cursor: pointer;
    }

    a {
      color: var(--text);
      text-decoration: none;
    }
  }

  // Right side
  .right {
    display: flex;
  }

  .cta {
    padding: 0.63rem 1.5rem;

    border-radius: 6rem;
    border: 1.5px solid var(--nav-cta);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--nav-cta2);
    text-decoration: none;
    box-shadow: 0 1px 1px -1px var(--nav-cta);
  }

  .custom-select {
    select {
      margin: 0 0.75rem 0 0;
      padding: 0.8rem 1.5rem 0.8rem 1.5rem;

      border: none;
      border-radius: 6rem;
      background: var(--nav-cta3);
      font-size: 0.875rem;
      cursor: pointer;
      color: rgb(48, 48, 48);

      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-image: none;
    }
  }

  // Underlining
  [aria-current]:not([aria-current='false']) {
    text-decoration: underline;
  }

  @media all and (max-width: 1024px) {
    nav,
    .right {
      display: none;
    }
  }
</style>
