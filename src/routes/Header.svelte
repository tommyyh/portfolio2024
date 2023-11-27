<script>
  import logo from '$lib/images/logo.svg';
  import chevronDownSvg from '$lib/images/chevron-down.svg';
  import Navigation from '../components/Header/Navigation.svelte';
  import DesktopNavigation from '../components/Header/DesktopNavigation.svelte';
  import { onMount } from 'svelte';
  export let t;

  $: menuActive = false;
  $: upActive = false;

  // Open/Close menu
  const menuClick = () => {
    menuActive = !menuActive;
  };

  // Scroll up
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  onMount(() => {
    const scrollFn = () => {
      const topDistance = window.scrollY;

      if (topDistance > 700) {
        upActive = true;
      } else {
        upActive = false;
      }
    };

    window.addEventListener('scroll', scrollFn);

    return () => {
      window.removeEventListener('scroll', scrollFn);
    };
  });
</script>

<div class="cont">
  <header>
    <a href="/" class="corner">
      <img src={logo} alt="logo" />

      <h3>Tommy Hoang</h3>
    </a>

    <button class="menu" on:click={menuClick}>
      <div class="menu-line" />
    </button>

    <Navigation {t} {menuActive} />
    <DesktopNavigation {t} />

    <div class={upActive ? 'up up-active' : 'up'} on:click={scrollUp}>
      <img src={chevronDownSvg} alt="chevron down" />
    </div>
  </header>
</div>

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

    min-width: 2.7em;
    min-height: 2.7em;
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

  // Up thing
  .up {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    position: fixed;
    bottom: -2.5rem;
    right: 1rem;
    z-index: 400;

    background: var(--primary);
    border-radius: 50%;
    box-shadow: 0px 4px 73px 0px rgba(0, 0, 0, 0.7);
    transition: 230ms ease-in-out;
    opacity: 0;

    img {
      filter: brightness(0.15);
      width: 0.78rem;
      transform: rotate(180deg);
    }
  }

  .up-active {
    bottom: 1rem;
    opacity: initial;
  }

  @media all and (min-width: 1025px) {
    .cont {
      display: flex;
      justify-content: center;
      position: relative;

      width: 100%;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: var(--width);

      padding: 1.8em var(--padding2);
    }

    // Left corner
    .corner {
      display: flex;
      align-items: center;

      text-decoration: none;

      // Logo
      img {
        width: 2.9em;
      }

      // Title
      h3 {
        margin: 0 0 0 0.42em;
        padding: 0.77em 1.7em;

        font-size: 0.85em;
        font-weight: 600;
        color: var(--nav-title);
        background: var(--primary2);
        border-radius: 5em;
      }
    }

    // Menu icon
    .menu {
      display: none;
    }

    // Up thing
    .up {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2.8rem;
      height: 2.8rem;
      position: fixed;
      bottom: -2.7rem;
      right: 2.7rem;
      z-index: 400;

      cursor: pointer;
      background: var(--primary);
      border-radius: 50%;
      box-shadow: 0px 4px 73px 0px rgba(0, 0, 0, 0.99);
      transition: 300ms ease;
      border: 0px solid #fff;

      img {
        filter: brightness(0.15);
        width: 0.78rem;
        transform: rotate(180deg);
      }

      &:hover {
        background: var(--primary3);
        box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 1);
      }
    }

    .up-active {
      bottom: 2.7rem;
      opacity: initial;
    }
  }
</style>
