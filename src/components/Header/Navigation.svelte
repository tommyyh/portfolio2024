<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { locale, locales } from '$lib/translations';
  export let menuActive;
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

  const onClick = async (e) => {
    menuActive = false;
  };
</script>

<nav class={menuActive ? 'nav-active' : undefined}>
  <div class={menuActive ? 'nav-content-active' : 'nav-content'}>
    <ul>
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/" on:click={onClick}>{$t(`${lang}.home`)}</a>
      </li>
      <li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
        <a href="/work" on:click={onClick}>{$t(`${lang}.work`)}</a>
      </li>
      {#if isHome}
        <li
          on:click={() => {
            onClick();
            servicesScrollToView();
          }}
        >
          {$t(`${lang}.services`)}
        </li>
      {:else}
        <li>
          <a href="/" on:click={onClick}>{$t(`${lang}.services`)}</a>
        </li>
      {/if}
      <li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
        <a href="/contact" on:click={onClick}>{$t(`${lang}.contact`)}</a>
      </li>
    </ul>

    <div class="custom-select">
      <select
        on:change={({ currentTarget }) => {
          goto(new URL(`?lang=${currentTarget.value}`, `${$page.url.href}`));
          menuActive = false;
        }}
      >
        {#each $locales as value}
          <option {value} selected={value === $locale}
            >{$t(`lang.${value}`)}</option
          >
        {/each}
      </select>
    </div>
  </div>
</nav>

<style lang="scss">
  // Nav
  nav {
    width: 0;
    height: 0;
    top: -6.5rem;
    right: -4rem;
    position: fixed;
    padding: 0 0 6.3rem 2.5rem;
    z-index: 500;

    background: var(--accent);
    border-radius: 50%;
    transition: all 400ms;

    ul {
      margin: 6rem 0 0 0;

      li {
        margin: 0.67rem 0 0 0;

        font-size: 1.82rem;
        font-weight: 600;
        list-style-type: none;
        color: var(--primary);
      }

      a {
        color: var(--primary);
        text-decoration: none;
      }
    }
  }

  // Nav - content animation
  .nav-active {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;

    border-radius: 0;
  }

  .nav-content {
    opacity: 0;
    transition: 300ms ease-in;
    transition-delay: -0.5s;
  }

  .nav-content-active {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    opacity: 100%;
    transition: 300ms ease-in;
    transition-delay: 0.5s;
  }

  // Language dropdown
  .custom-select {
    display: inline-block;

    position: relative;
    padding: 0;

    background-color: transparent;
  }

  select {
    padding: 0.7em;
    width: 7.5em;
    text-align: center; /* Center the text */

    appearance: none; /* Remove default appearance */
    background-color: transparent;
    border: none;
    background: var(--primary);
    border-radius: 5em;
    font-family: var(--font);
    color: var(--second);
    font-weight: 600;
    font-size: 1.05rem;
  }

  @media all and (min-width: 1025px) {
    nav {
      display: none;
    }
  }
</style>
