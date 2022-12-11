<template>
  <div class="app">
    <HeaderMedium
      class="width page-header tac"
      heading="Changelog"
      subheading="We’re always shipping updates to Atlas. Check out our changelog below or subscribe for future updates."
    />

    <main class="width">
      <div v-for="article of changelog" :key="article.slug">
        <section>
          <aside>
            <div class="aside-wrapper">
              <header class="fs-sm inter">{{ article.name }}</header>
              <p class="color--v-dark">{{ formatDate(article.createdAt) }}</p>
            </div>
          </aside>

          <article class="changelog-article">
            <figure class="hero">
              <img :src="`${article.hero}`" />
            </figure>
            <nuxt-content :document="article" />
          </article>
        </section>
      </div>
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

  main {
    position: relative;
    margin: 4rem auto 0;
    @include breakpoint(md) {
      margin-top: 9.6rem;
      padding-left: 2.4rem;
      border-left: 1px solid #591bdd;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 6.4rem;
    }
  }

  .aside-wrapper {
    top: 0;
    height: 9vh;
    align-self: flex-start;
  }

  aside {
    z-index: var(--z2);
    padding-top: 1.2rem;
    align-self: flex-start;
    @include breakpoint(md) {
      position: sticky;
      top: 6.4rem;
      background: none;
      width: grid-width(4);
    }
    p {
      @include breakpoint(md) {
        font-size: 1.5rem;
      }
    }
  }

  article {
    border-bottom: 1px solid #424242;
    padding-bottom: 4rem;
    @include breakpoint(md) {
      padding-bottom: 6.4rem;
      /* width: grid-width(8); */
    }
    header {
      margin-bottom: 1.2rem;
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }
  }
</style>

<script>
  export default {
    data: () => ({
      changelog: null,
    }),
    async fetch() {
      this.changelog = await this.$content("changelog", { deep: true })
        .sortBy("title", "desc")
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
      formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(date).toLocaleDateString("en", options)
      },
    },
    mounted() {
      this.fadeIn()
    },
  }
</script>
