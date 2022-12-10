<template>
  <nav>
    <!-- large main -->
    <div class="nav-lg color--dark width">
      <div class="home">
        <nuxt-link to="/">
          <logo class="logo" />
        </nuxt-link>
      </div>

      <ul class="fs-xs">
        <li><nuxt-link to="/features">Features</nuxt-link></li>
        <li><nuxt-link to="/pricing">Pricing</nuxt-link></li>
        <li><nuxt-link to="/changelog">Changelog</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
      </ul>

      <div class="rule" />

      <ul class="fs-xs buttons">
        <li><nuxt-link to="/features">Log In</nuxt-link></li>
        <li>
          <nuxt-link class="button" to="/"
            ><btn :type="{ primary: true }" content="sign up"
          /></nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  nav {
    --spacing: 2.8rem;
    display: flex;
    flex-direction: row;
    position: sticky;
    z-index: var(--zmax);
    top: 0;
    height: 48px;
    font-size: 1.4rem;
    font-weight: 500;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.24);
    background: linear-gradient(#05020d, rgba(5, 2, 13, 0.4));
    backdrop-filter: blur(22px);
    transition: all 300ms ease;
  }

  .logo {
    transform: scale(0.72) translateY(0.3rem);
    transform-origin: left;
  }

  /* navigation ≥ md */

  .nav-lg {
    display: none;
    @include breakpoint(md) {
      display: flex;
      align-items: center;
    }
  }

  .nav-lg .home {
    flex: 1;
  }

  .nav-lg ul {
    display: flex;
    align-items: center;
  }

  .nav-lg li {
    margin-left: 2vw;
    position: relative;
    white-space: nowrap;
  }

  .nav-lg .rule {
    position: relative;
    margin-left: 2.8rem;
    width: 1px;
    height: 18px;
    background: rgba(255, 255, 255, 0.56);
    pointer-events: none;
  }

  /* general */

  a {
    transition: opacity 300ms ease;
  }

  a.nuxt-link-exact-active {
    color: #a5a5ff;
  }

  @media (pointer: fine) {
    a:hover {
      opacity: 0.72;
    }

    .home a:hover {
      opacity: 1;
    }

    a.button:hover {
      opacity: 1;
    }
  }
</style>

<script>
  export default {}
</script>
