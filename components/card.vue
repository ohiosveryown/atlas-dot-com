<template>
  <li class="wrapper">
    <header>
      <i class="emoji">{{ emoji }}</i>
      <img class="icon" :src="icon" alt="" />
      <h3 class="name inter fs-md">{{ name }}</h3>
    </header>
    <p class="description color--dark">{{ description }}</p>
    <img class="hero" :src="hero" alt="" />
  </li>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .wrapper {
    margin-bottom: 3.2rem;
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

  .emoji {
    display: block;
    font-style: inherit;
    font-size: 2.8rem;
    margin-bottom: 0.6rem;
  }

  .icon {
    width: 4.8rem;
  }

  .name {
    margin: 0.4rem 0 1rem;
    line-height: 1.2;
    text-transform: capitalize;
  }

  .description {
    margin-bottom: 2rem;
    color: #c7c3cd;
  }
</style>

<script>
  export default {
    props: ["emoji", "icon", "name", "description", "hero"],
  }
</script>
