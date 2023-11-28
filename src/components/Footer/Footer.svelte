<script>
  export let t;
  import instagramSvg from '$lib/images/footer/instagram.svg';
  import linkedInSvg from '$lib/images/footer/linked-in.svg';
  import tiktokSvg from '$lib/images/footer/tiktok.svg';
  import twitterSvg from '$lib/images/footer/twitter.svg';
  import { page } from '$app/stores';

  let lang;

  if ($page.url.pathname === '/') {
    lang = 'home.footer';
  } else if ($page.url.pathname === '/contact') {
    lang = 'contact.footer';
  } else if ($page.url.pathname === '/work') {
    lang = 'work.footer';
  } else {
    lang = 'home.footer';
  }
</script>

<div class="cont">
  <footer>
    {#if $page.url.pathname === '/contact'}
      <div style="margin-top: -7em;" />
    {:else}
      <div class="cta">
        <div>
          <h4>{$t(`${lang}.sub`)}</h4>
          <h2>{$t(`${lang}.title`)}</h2>
        </div>

        <div>
          <p>{$t(`${lang}.text`)}</p>

          <a href="/contact">{$t(`${lang}.cta`)}</a>
        </div>
      </div>
    {/if}

    <div class="bottom">
      <a href="/" class="home">
        <h3>{$t(`${lang}.name`)}</h3>
      </a>
      <a href="mailto:tommyyhoangg@gmail.com" class="mail">
        <h4>{$t(`${lang}.mail`)}</h4>
      </a>

      <div class="socials">
        <a href="https://www.instagram.com/tommyy.hoang/"
          ><img src={instagramSvg} alt="Instagram" /></a
        >
        <a href=""><img src={linkedInSvg} alt="LinkedIn" /></a>
        <a href=""><img src={tiktokSvg} alt="Tik Tok" /></a>
        <a href=""><img src={twitterSvg} alt="Twitter" /></a>
      </div>
    </div>
  </footer>
</div>

<style lang="scss">
  footer {
    padding: 12em var(--padding) 0em var(--padding);
  }

  .cta {
    width: 100%;
    padding: 4.19em 2em 4.9em 2em;

    background: var(--accent);
    border-radius: 1.22em;
    box-shadow: 0px 4px 174px 0px rgba(0, 0, 0, 0.45);

    h4 {
      color: var(--sub2);
      font-size: 0.72em;
    }

    h2 {
      margin: 0.18em 0 0 0;

      font-size: 2em;
      color: var(--primary);
      line-height: 1.2em;
    }

    p {
      margin: 1.2em -0.8em 2.75em 0;

      font-size: 0.9em;
      font-weight: 400;
      color: var(--footer-text);
      line-height: 1.55em;
    }

    a {
      padding: 0.7em 1.65em;

      font-size: 0.95em;
      font-weight: 700;
      background: var(--primary);
      color: var(--accent);
      text-decoration: none;
      border-radius: 4em;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 5.63em 0 5.99em 0;

    h3 {
      font-size: 1.25em;
      font-weight: 500;
      color: var(--title);
    }

    h4 {
      margin: 2.7em 0 0 0;

      font-size: 1.099em;
      font-weight: 400;
      color: var(--process1-text);
    }
  }

  .socials {
    display: flex;

    margin: 1.1em 0 0 0;

    img {
      margin: 0 0.31em;
      width: 1.25em;
      height: 1.25em;
    }
  }

  .mail,
  .home {
    text-decoration: none;
  }

  @media all and (min-width: 1025px) {
    .cont {
      display: flex;
      justify-content: center;
      width: 100%;
      position: relative;
    }

    footer {
      width: 1595px;
      padding: 14em var(--padding) 0em var(--padding);
    }

    .cta {
      width: 100%;
      padding: 5.9em 16rem 7.1em 16rem;

      background: var(--accent);
      border-radius: 1.22em;
      box-shadow: 0px 4px 174px 0px rgba(0, 0, 0, 0.45);

      display: grid;
      justify-content: space-between;
      grid-template-columns: 48% 45%;
      margin: 0 0 0 0;

      h4 {
        color: var(--sub2);
        font-size: 1.1em;
      }

      h2 {
        margin: 0.18em 0 0 0;

        font-size: 2.9em;
        color: var(--primary);
        line-height: 1.15em;
      }

      p {
        margin: 1.7em -0.8em 2.4em 0;

        font-size: 1.15em;
        font-weight: 400;
        color: #aeaeae;
        line-height: 1.55em;
      }

      a {
        padding: 0.86em 1.9em;

        font-size: 1.02em;
        font-weight: 700;
        background: var(--primary);
        color: var(--accent);
        text-decoration: none;
        border-radius: 4em;
        transition: 300ms ease;

        &:hover {
          box-shadow: 0px 4px 35px 0px rgba(255, 255, 255, 0.22);
        }
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 5.63em 0 5.99em 0;

      h3 {
        font-size: 1.25em;
        font-weight: 500;
        color: var(--title);
      }

      h4 {
        margin: 2.7em 0 0 0;

        font-size: 1.099em;
        font-weight: 400;
        color: var(--process1-text);
      }
    }

    .socials {
      display: flex;

      margin: 1.1em 0 0 0;

      img {
        margin: 0 0.31em;
        width: 1.25em;
        height: 1.25em;
      }
    }

    .mail,
    .home {
      text-decoration: none;
    }
  }
</style>
