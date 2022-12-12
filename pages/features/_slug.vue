<template>
  <div class="app width">
    <main>
      <header>
        <img class="icon" :src="`${article.icon}`" />
        <h1 class="inter fs-lg tac">{{ article.name }}</h1>
        <h2 class="founders fs-lg tac color--v-dark">
          {{ article.description }}
        </h2>
      </header>

      <figure class="hero">
        <img :src="`${article.hero}`" />
      </figure>

      <article class="feature-article">
        <nuxt-content :document="article" />
      </article>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 4rem;
    @include breakpoint(md) {
      margin: 0 auto 6.4rem;
      width: grid-width(8);
    }
    @include breakpoint(mdl) {
      width: grid-width(6.4);
    }
    .icon {
      margin-bottom: 1.8rem;
      width: 5.6rem;
      @include breakpoint(md) {
        margin-bottom: 2.4rem;
        width: 6.4rem;
      }
    }

    h1 {
      padding-bottom: 1.6rem;
      background: linear-gradient(180deg, #ffffff 0%, #d0c4e7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @include breakpoint(md) {
        padding-bottom: 1.8rem;
        line-height: 1.1;
      }
    }
  }

  .hero {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 3.2rem;
    padding: 1.2rem;
    background: linear-gradient(
      135deg,
      rgba(58, 51, 73, 1) 2%,
      rgba(58, 51, 73, 0.22) 88%
    );
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.75),
      0px 12px 10px rgba(0, 0, 0, 0.375), inset 0px 1px 1px #5c546c;
    overflow: hidden;

    @include breakpoint(md) {
      margin-bottom: 4.8rem;
      padding: 4rem;
    }
    img {
      border-radius: 8px;
    }
  }
</style>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content("features", params.slug).fetch()
      return {
        article,
      }
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
