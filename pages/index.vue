<template>
  <div class="width app">
    <HeaderLarge
      class="width"
      heading="Give your customers superhuman support"
      subheading="Atlas is a blazingly fast, modern support platform, helping identify and diagnose customer experience and interaction."
    />

    <section class="hero">
      <figure class="skew-enter">
        <img
          src="https://atlas-www-assets.s3.amazonaws.com/hero--customer-profile.png"
          alt="Atlas – Customer Profile Page"
        />
      </figure>
    </section>

    <main class="skew-enter">
      <section class="features">
        <ul v-for="feature of features" :key="feature.slug">
          <card
            class="rm"
            :icon="`${feature.icon}`"
            :name="`${feature.name}`"
            :description="`${feature.description}`"
            :hero="`${feature.hero}`"
          />
        </ul>
      </section>

      <section class="app-preview">
        <HeaderMedium
          class="tac width--seven"
          heading="Customer Centric Productivity"
          subheading="Build relationships with your customers by seeing them in their full context.
          Check it out below 👇"
        />

        <app-preview />
      </section>

      <section class="ux">
        <HeaderMedium
          class="tac width--seven"
          heading="A Modern Tool with a Modern User Experience"
          subheading="Finally a fast, simple UI. Rich hotkeys, a command palette, and AI accelerated productivity tools."
        />

        <ul>
          <card
            emoji="⌨️"
            name="Designed for the Keyboard"
            description="Know your customers most pressing and time sensitive issues."
          />

          <card
            emoji="🧰"
            name="Command Menu"
            description="Know your customers most pressing and time sensitive issues."
          />

          <card
            emoji="🔍"
            name="Search"
            description="Know your customers most pressing and time sensitive issues."
          />
        </ul>
      </section>

      <section class="signup">
        <signup
          heading="Work smarter. Get started today."
          subheading="Sign up today and make customer interaction easier, and smarter."
        />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .rm {
    width: 30rem;
  }

  section.hero,
  section.features,
  section.app-preview,
  section.ux,
  section.signup {
    margin-bottom: 8rem;

    @include breakpoint(md) {
      margin-bottom: 11.2rem;
    }
  }

  section.features header,
  section.ux header {
    margin-bottom: 2.4rem;
    @include breakpoint(md) {
      margin-bottom: 3.2rem;
    }
  }

  section.ux header {
    text-align: center;
    /* @include breakpoint(md) {
      width: grid-width(5);
      text-align: inherit;
    } */
  }

  section.ux ul {
    @include breakpoint(md) {
      display: flex;
      justify-content: space-between;
    }
  }

  section.ux li {
    padding: 1.2rem 1.6rem;
    @include breakpoint(md) {
      padding: 1.6rem 2rem;
      width: grid-width(3.7);
    }
  }
</style>

<script>
  import { skewEnter } from "../logic/anim.js"
  export default {
    data: () => ({
      features: null,
    }),
    async fetch() {
      this.features = await this.$content("features", { deep: true })
        .sortBy("title", "desc")
        .where({ type: "customer centric" })
        .fetch()
    },

    methods: {
      handleScroll() {
        const observerOptions = {
          root: null,
          threshold: 0,
          rootMargin: "0px 0px -240px 0px",
        }
        const observerCallback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active")
            }
          })
        }
        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        )
        const targets = document.querySelectorAll(".scroll-target")
        targets.forEach((e) => observer.observe(e))
      },
    },

    mounted() {
      skewEnter()
      this.handleScroll()
    },
  }
</script>
