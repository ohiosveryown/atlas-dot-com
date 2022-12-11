<template>
  <header>
    <h2 class="inter fs-lg">
      {{ heading }}
    </h2>
    <h3 class="founders fs-lg color--v-dark">
      {{ subheading }}
    </h3>
  </header>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  h2 {
    padding-bottom: 1.6rem;
    background: linear-gradient(180deg, #ffffff 0%, #d0c4e7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @include breakpoint(md) {
      padding-bottom: 1.6rem;
      line-height: 1.1;
    }
  }

  h3 {
    letter-spacing: 0.32px;
    font-size: 2.4rem;
    line-height: 1.1;

    @include breakpoint(md) {
      font-size: 2.8rem;
      line-height: 1;
    }
  }
</style>

<script>
  export default {
    props: ["heading", "subheading"],
  }
</script>
