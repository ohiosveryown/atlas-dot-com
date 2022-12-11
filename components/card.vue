<template>
  <li class="wrapper">
    <header>
      <img class="icon" :src="icon" alt="" />
      <h3 class="name inter fs-md">{{ name }}</h3>
    </header>
    <p class="description">{{ description }}</p>
    <img class="hero" :src="hero" alt="" />
  </li>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .wrapper {
    border-radius: 20px;
    background: linear-gradient(
      135deg,
      rgba(58, 51, 73, 1) 2%,
      rgba(58, 51, 73, 0.22) 88%
    );
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.75),
      0px 12px 10px rgba(0, 0, 0, 0.375), inset 0px 1px 1px #5c546c;
    overflow: hidden;
  }

  .name {
    text-transform: capitalize;
  }
</style>

<script>
  export default {
    props: ["icon", "name", "description", "hero"],
  }
</script>
