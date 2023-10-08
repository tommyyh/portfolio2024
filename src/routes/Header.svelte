<script>
  import logo from '$lib/images/logo.svg';
  import Navigation from '../components/Header/Navigation.svelte';
  export let t;

  $: menuActive = false;

  // Open/Close menu
  const menuClick = () => {
    menuActive = !menuActive;
  };
</script>

<header>
  <a href="/" class="corner">
    <img src={logo} alt="logo" />

    <h3>Tommy Hoang</h3>
  </a>

  <button class="menu" on:click={menuClick}>
    <div class="menu-line" />
  </button>

  <Navigation {t} {menuActive} />
</header>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.2em var(--padding);
  }

  // Left corner
  .corner {
    display: flex;
    align-items: center;

    text-decoration: none;

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
