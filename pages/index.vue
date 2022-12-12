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
        <ul class="row-one">
          <nuxt-link
            v-for="feature of featuresRow"
            :key="feature.slug"
            :to="'/features/' + feature.slug"
          >
            <card
              :icon="`${feature.icon}`"
              :name="`${feature.name}`"
              :description="`${feature.description}`"
              :hero="`${feature.hero}`"
            />
          </nuxt-link>
        </ul>
      </section>

      <section class="app-preview">
        <HeaderSmall
          class="tac width--seven"
          heading="Customer Centric Productivity"
          subheading="Build relationships with your customers by seeing them in their full context.
          Check it out below 👇"
        />

        <app-preview />
      </section>

      <section class="ux">
        <HeaderSmall
          class="tac width--seven"
          heading="A Modern Tool with a Modern User Experience"
          subheading="Finally a fast, simple UI. Rich hotkeys, a command palette, and AI accelerated productivity tools."
        />

        <ul>
          <card
            emoji="⌨️"
            icon="https://atlas-www-assets.s3.amazonaws.com/icon--help-center.png"
            name="Keyboard 1st"
            description="Know your customers most pressing and time sensitive issues."
          />

          <card
            emoji="🧰"
            icon="https://atlas-www-assets.s3.amazonaws.com/icon--help-center.png"
            name="Command Menu"
            description="Know your customers most pressing and time sensitive issues."
          />

          <card
            emoji="🔍"
            icon="https://atlas-www-assets.s3.amazonaws.com/icon--help-center.png"
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

  .row-one {
    @include breakpoint(md) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    a:nth-of-type(1) {
      @include breakpoint(md) {
        width: grid-width(3);
      }
    }

    a:nth-of-type(2) {
      @include breakpoint(md) {
        width: grid-width(3);
      }
    }

    a:nth-of-type(3) {
      @include breakpoint(md) {
        display: block;
        width: grid-width(5);
      }
    }
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
      featuresRow: null,
    }),
    async fetch() {
      this.featuresRow = await this.$content("features", { deep: true })
        .sortBy("title", "desc")
        .limit(3)
        // .where({ type: "customer centric" })
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
