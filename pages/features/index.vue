<template>
  <div class="app">
    <HeaderMedium
      class="width page-header tac"
      heading="Features"
      subheading="A fully integrated suite of support products"
    />

    <img
      src="https://atlas-www-assets.s3.amazonaws.com/icon--features.png"
      alt=""
      class="hero"
    />

    <main class="width">
      <section class="all-in-one">
        <header>
          <h3 class="inter">All-in-one</h3>
          <p class="color--v-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum
            sit impedit in vero recusandae commodi nisi facilis numquam,
            reprehenderit minima.
          </p>
        </header>
        <ul>
          <nuxt-link
            v-for="feature of allInOne"
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

      <section class="customer-centric">
        <header>
          <h3 class="inter">Customer Centric</h3>
          <p class="color--v-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum
            sit impedit in vero recusandae commodi nisi facilis numquam,
            reprehenderit minima.
          </p>
        </header>
        <ul>
          <nuxt-link
            v-for="feature of customerCentric"
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
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";
  .page-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 4rem;
    @include breakpoint(md) {
      width: grid-width(6);
    }
    @include breakpoint(xl) {
      width: grid-width(5);
    }
  }

  .hero {
    pointer-events: none;
    margin: 0 auto;
    @include breakpoint(md) {
      margin-bottom: 9.6rem;
      width: 50rem;
    }
  }

  section {
    margin-bottom: 2rem;
    @include breakpoint(md) {
      margin-bottom: 11.2rem;
    }
  }

  h3 {
    margin-bottom: 1.2rem;
    font-size: 2.4rem;
    line-height: 1.1;

    @include breakpoint(md) {
      font-size: 2.8rem;
      line-height: 1;
    }
  }

  p {
    margin-bottom: 2rem;
    @include breakpoint(md) {
      margin-bottom: 3.2rem;
      max-width: 48ch;
    }
  }

  ul {
    display: grid;
    align-items: center;
    gap: 4rem;
    align-items: start;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  li {
    margin-bottom: 0 !important;
  }
</style>

<script>
  export default {
    data: () => ({
      allInOne: null,
      customerCentric: null,
    }),
    async fetch() {
      this.allInOne = await this.$content("features", { deep: true })
        .sortBy("title", "asc")
        .where({ type: "all in one" })
        .fetch()

      this.customerCentric = await this.$content("features", { deep: true })
        .sortBy("title", "desc")
        .where({ type: "customer centric" })
        .fetch()
    },

    methods: {
      fadeIn() {
        gsap.from(".app", {
          opacity: 0,
          duration: 1.2,
          delay: 0.15,
          stagger: 0.15,
          ease: Power4.easeOut,
        })
      },
    },

    mounted() {
      this.fadeIn()
    },
  }
</script>
