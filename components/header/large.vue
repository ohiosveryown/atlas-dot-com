<template>
  <header class="width tac">
    <h1 class="skew-enter inter fs-xxl">{{ heading }}</h1>
    <h2 class="skew-enter color--dark founders fs-lg">
      {{ subheading }}
    </h2>
  </header>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  header {
    margin: 0 auto 2.8rem;

    @include breakpoint(md) {
      margin: 0 auto 6.4rem;
    }
  }

  h1 {
    margin: 0 auto 2.8rem;
    background: var(--gradient-brand);
    background: linear-gradient(172deg, #2842ee -30%, #a056ff 54%, #4d186e 92%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @include breakpoint(md) {
      margin: 0 auto;
      width: grid-width(10);
      padding-bottom: 3.6rem;
    }
  }

  h2 {
    margin: auto;

    @include breakpoint(md) {
      width: grid-width(7);
    }
  }
</style>

<script>
  export default {
    props: ["heading", "subheading"],
  }
</script>
