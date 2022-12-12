<template>
  <div class="app">
    <HeaderMedium
      class="width page-header tac"
      heading="Pricing"
      subheading="Choose a plan that works for your team"
    />

    <main class="width">
      <card-pricing />
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
    @include breakpoint(lg) {
      width: grid-width(5);
    }
  }
</style>

<script>
  export default {
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
