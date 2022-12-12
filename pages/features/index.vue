<template>
  <div class="app">
    <HeaderMedium
      class="width page-header tac"
      heading="Features"
      subheading="A fully integrated suite of support products"
    />

    <main class="width">
      <section class="all-in-one">
        <h3 class="inter">All-in-one</h3>
        <p class="color--v-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum
          sit impedit in vero recusandae commodi nisi facilis numquam,
          reprehenderit minima.
        </p>
        <ul>
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
      margin: 0 auto 6.4rem;
      width: grid-width(6);
    }
    @include breakpoint(xl) {
      width: grid-width(5);
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
      featuresRow: null,
      features: null,
    }),
    async fetch() {
      this.featuresRow = await this.$content("features", { deep: true })
        .sortBy("title", "asc")
        .where({ type: "all in one" })
        .fetch()

      this.features = await this.$content("features", { deep: true })
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
