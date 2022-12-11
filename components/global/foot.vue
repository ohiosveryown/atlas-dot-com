<template>
  <footer>
    <div class="container width">
      <section class="left">
        <div>
          <nuxt-link to="/">
            <logo class="logo" />
          </nuxt-link>

          <p class="op-7 fs-sm">
            © Atlas Support. All Rights Reserved.
            <br />4329 Kingfisher Drive <br />San Francisco, CA 94121
          </p>
        </div>
      </section>
      <section class="right">
        <ul class="fs-sm">
          <header class="inter">Product</header>
          <li><nuxt-link to="/features">Features</nuxt-link></li>
          <li><nuxt-link to="/pricing">Pricing</nuxt-link></li>
          <li><nuxt-link to="/changelog">Changelog</nuxt-link></li>
        </ul>

        <ul class="fs-sm">
          <header class="inter">Company</header>
          <li>
            <nuxt-link to="/about">About Us</nuxt-link>
          </li>
        </ul>

        <ul class="fs-sm">
          <header class="inter">Resources</header>
          <li><a href="/">Help Center</a></li>
          <li><a href="/">Terms of Service</a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul>

        <ul class="fs-sm">
          <header class="inter">Developers</header>
          <li><a href="/">API</a></li>
          <li><a href="/">Status</a></li>
        </ul>
      </section>
    </div>

    <img
      src="https://res.cloudinary.com/pence-atlas/image/upload/v1657035564/arxk14u4gdnab21ws1rw_ia7u0r.png"
      alt="mesh gradient"
      class="bg"
    />
  </footer>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  footer {
    position: relative;
    padding: 2rem 0;
    border-top: 0.5px solid rgba(255, 255, 255, 0.32);

    @include breakpoint(md) {
      padding: 4rem 0;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: var(--z2);

    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .right {
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      flex-direction: row;
    }

    ul {
      display: flex;
      margin-bottom: 2rem;

      flex-direction: column;
      @include breakpoint(md) {
        margin-left: 6.4rem;
        margin-bottom: 0;
      }
    }

    header,
    li {
      margin-bottom: 2rem;
    }

    li {
      opacity: 0.8;
      transition: opacity 300ms ease;
    }
  }

  .left {
    margin-bottom: 3.2rem;

    @include breakpoint(md) {
      margin-bottom: 0;
      width: grid-width(3.3);
    }

    .logo {
      margin-bottom: 1rem;
      transform: scale(0.8);
      transform-origin: left;
    }
  }

  p {
    line-height: 1.4;
  }

  .bg {
    position: absolute;
    z-index: var(--z1);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    opacity: 0;
    @include breakpoint(md) {
      opacity: 1;
    }
  }

  @media (pointer: fine) {
    .right li:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
</style>

<script>
  export default {}
</script>
