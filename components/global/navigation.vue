<template>
  <nav>
    <!-- nav small -->
    <div class="nav-sm color--dark">
      <div class="home">
        <nuxt-link to="/">
          <logo class="logo" />
        </nuxt-link>
      </div>

      <!-- hamburger -->
      <div
        @click=";(navOpen = !navOpen), [navOpen ? showList() : hideList()]"
        class="hamburger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          fill="none"
        >
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M0 1.736a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm1 6a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H1Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- menu -->
      <menu class="menuSm" ref="menuSm">
        <ul class="color--dark">
          <li><nuxt-link to="/features">Features</nuxt-link></li>
          <li><nuxt-link to="/pricing">Pricing</nuxt-link></li>
          <li><nuxt-link to="/changelog">Changelog</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
        </ul>

        <footer>
          <ul>
            <li>
              <a class="button" href="https://app.getatlas.io/auth/signup">
                <btn :type="{ primary: true }" content="sign up" />
              </a>
            </li>

            <li class="login">
              Existing user?
              <a
                class="color--light-blue"
                href="https://app.getatlas.io/auth/login?next=/"
                >Log in</a
              >
            </li>
          </ul>
        </footer>
      </menu>
    </div>

    <!-- nav large -->
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
        <li><a href="https://app.getatlas.io/auth/login?next=/">Log In</a></li>
        <li>
          <a class="button" href="https://app.getatlas.io/auth/signup"
            ><btn :type="{ primary: true }" content="sign up"
          /></a>
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

  /* navigation < md */
  .nav-sm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 88vw;
    @include breakpoint(md) {
      display: none;
    }
  }

  .nav-sm menu {
    pointer-events: none;
    position: absolute;
    top: 34px;
    left: 0;
    width: 100%;
    border-radius: 0 0 15px 15px;
    padding: 0;
    background: linear-gradient(#05020d, rgba(5, 2, 13, 0.4));
    backdrop-filter: blur(22px);
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.8),
      0px 12px 10px rgba(0, 0, 0, 0.4);
    transform: translateY(-3rem) scaleY(0.75);
    transform-origin: top;
    /* transition: opacity 200ms ease, transform 10ms ease 201ms; */
    opacity: 0;
  }

  .nav-sm menu ul {
    margin: 0 auto;
    width: 88%;
  }

  .nav-sm menu li {
    padding: 2rem 0rem;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
    font-size: 2rem;
  }

  .nav-sm footer {
    padding: 2rem 0 3.2rem;
  }

  .nav-sm footer li {
    border-bottom: none;
    padding: 1.2rem 1.2rem;
  }

  .nav-sm footer li button {
    width: 100%;
    padding: 1.4rem 0;
    font-size: 1.8rem;
  }

  .nav-sm footer .login {
    padding: 0.8rem 0 0 0;
    text-align: center;
    font-size: 1.6rem;
    color: #8e879f;
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
  export default {
    data: () => ({
      navOpen: false,
    }),

    methods: {
      showList() {
        const tl = gsap.timeline()
        tl.to(this.$refs.menuSm, {
          opacity: 1,
          y: 0,
          scaleY: 1,
          duration: 0.8,
          ease: Elastic.easeOut.config(1, 0.5),
          pointerEvents: "inherit",
        })
      },
      hideList() {
        const tl = gsap.timeline()
        tl.to(this.$refs.menuSm, {
          opacity: 0,
          duration: 0.3,
          ease: Power4.easeOut,
        })
        tl.to(this.$refs.menuSm, {
          y: "-3rem",
          scaleY: 0.75,
          duration: 0.4,
          ease: Power4.easeOut,
          pointerEvents: "none",
        })
      },
    },
    watch: {
      $route() {
        this.navOpen = false
        this.hideList()
      },
    },
  }
</script>
