<template>
  <div class="app">
    <h1>changelog Page Template...</h1>
    <nuxt-content :document="article" />
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";
</style>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content("changelog", params.slug).fetch()

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
