<script>
  import ProfilePicPng from '$lib/images/profile_pic.png';
  export let t;
  export let index;

  const lang = `home.reviews.list.${index}`;
</script>

<div class="step">
  <img src={ProfilePicPng} alt="profile" />
  <h3>{$t(`${lang}.author`)}</h3>
  <h5>{$t(`${lang}.sub`)}</h5>

  <div class="text">
    <p>{$t(`${lang}.text`)}</p>
  </div>

  <h4>{$t(`${lang}.rating`)}/5</h4>
</div>

<style lang="scss">
  .step {
    margin: 4.35em 0 0 0;
    padding: 1.6em 1.5em 2.7em 2.4em;
    position: relative;

    border-radius: 2.2em;
    box-shadow: 0px 4px 103px 0px rgba(0, 0, 0, 0.19);

    // Author
    h3 {
      margin: 0.7em 0 0 0;

      font-size: 1.5em;
      font-weight: 500;
    }

    // Rating
    h4 {
      margin: 1.4em 0 0 0;

      font-size: 1.44em;
      font-weight: 500;
    }

    // Sub
    h5 {
      font-size: 0.8em;
      font-weight: 400;
    }

    img {
      margin: -4.5em 0 0 0;
      width: 7.6em;
      height: 7.6em;

      box-shadow: 0px 9px 21px 0px rgba(0, 0, 0, 0.07);
      border-radius: 50%;
    }
  }

  // Text - content
  .text {
    padding: 0 0.9em 0 0;
    margin: 1.5em 0 0 0;
    max-height: 8.8em;
    overflow-y: scroll;

    p {
      font-size: 1.05em;
      font-weight: 400;
      letter-spacing: -0.2px;
      line-height: 140%;
    }
  }
</style>
