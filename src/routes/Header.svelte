<script>
  import { page } from '$app/stores';
  import logo from '$lib/images/logo.svg';
  export let data;

  $: l = data.dict;
  $: ({ lang } = data);
  $: menuActive = false;

  // This is supposed to hit +layout.server.js but doesn't - 405 Error
  const submitOnChange = (e) => {
    e.target.parentElement.submit();
  };

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
    <ul class={menuActive ? 'nav-content-active' : undefined}>
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
        <a href="/about">Our Work</a>
      </li>
      <li
        aria-current={$page.url.pathname === '/services' ? 'page' : undefined}
      >
        <a href="/about">Services</a>
      </li>
      <li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
        <a href="/about">Contact Us</a>
      </li>
    </ul>

    <form method="POST" action="/language">
      <select name="lang" bind:value={lang} on:change={submitOnChange}>
        <option value="en">EN</option>
        <option value="cz">CZ</option>
      </select>
    </form>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 0;
    height: 0;
    top: -6.5rem;
    right: -4rem;
    position: fixed;
    padding: 0 0 6.4rem 2.5rem;
    z-index: 500;

    background: var(--accent);
    border-radius: 50%;
    transition: all 400ms;

    ul {
      margin: 6rem 0 0 0;
      opacity: 0;

      transition: 300ms ease-in;
      transition-delay: -0.5s;

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

  .nav-content-active {
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
</style>
