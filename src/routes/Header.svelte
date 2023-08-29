<script>
  import { page } from '$app/stores';
  import logo from '$lib/images/logo.svg';
  import { loadTranslations } from '$lib/lang/translations';
  import { t } from '$lib/lang/translations';

  $: menuActive = false;

  const onChange = async (e) => {
    const locale = e.target.value;

    await loadTranslations(locale, '/'); // keep this just before the `return`
    menuActive = false;
  };

  // Open/Close menu
  const menuClick = () => {
    menuActive = !menuActive;
  };
</script>

<header>
  <div class="corner">
    <img src={logo} alt="logo" />

    <h3>Tommy Hoang</h3>
  </div>

  <button class="menu" on:click={menuClick}>
    <div class="menu-line" />
  </button>

  <nav class={menuActive ? 'nav-active' : undefined}>
    <div class={menuActive ? 'nav-content-active' : 'nav-content'}>
      <ul>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
          <a href="/">{$t('home.header.home')}</a>
        </li>
        <li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
          <a href="/about">{$t('home.header.work')}</a>
        </li>
        <li
          aria-current={$page.url.pathname === '/services' ? 'page' : undefined}
        >
          <a href="/about">{$t('home.header.services')}</a>
        </li>
        <li
          aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
        >
          <a href="/about">{$t('home.header.contact')}</a>
        </li>
      </ul>

      <div class="custom-select">
        <select name="lang" on:change={onChange}>
          <option value="en">{$t('home.header.english')}</option>
          <option value="cs">{$t('home.header.czech')}</option>
        </select>
      </div>
    </div>
  </nav>
</header>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.2em var(--padding);
  }

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

  // Left corner
  .corner {
    display: flex;
    align-items: center;

    // Logo
    img {
      width: 2.64em;
    }

    // Title
    h3 {
      margin: 0 0 0 0.42em;
      padding: 0.77em 1.7em;

      font-size: 0.72em;
      font-weight: 600;
      color: var(--nav-title);
      background: var(--primary2);
      border-radius: 5em;
    }
  }

  // Menu icon
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.7em;
    height: 2.7em;
    right: var(--padding);
    z-index: 550;
    position: fixed;

    border-radius: 50%;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
    background: var(--primary);
    border: none;
  }

  .menu-line {
    width: 1.2em;
    height: 2px;
    position: relative;

    background: var(--second);

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 1.2em;
      height: 2px;
      transform: translate(50%, -5px);
      right: 50%;

      background: var(--second);
    }

    &::after {
      transform: translate(50%, 5px);
    }
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
</style>
