<template>
  <li class="wrapper">
    <header>
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
    padding: 2rem;
    background: linear-gradient(
      135deg,
      rgba(58, 51, 73, 1) 2%,
      rgba(58, 51, 73, 0.22) 88%
    );
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.75),
      0px 12px 10px rgba(0, 0, 0, 0.375), inset 0px 1px 1px #5c546c;
    overflow: hidden;
    transition: transform 300ms ease;
    will-change: transform;
  }

  .emoji {
    display: block;
    font-style: inherit;
    font-size: 2.8rem;
    margin-bottom: 0.6rem;
  }

  .icon {
    margin: 0 1.2rem 0.6rem 0;
    width: 4rem;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
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

  .hero {
    border-radius: 10px;
  }

  @media (pointer: fine) {
    .wrapper:hover {
      transform: scale(1.02);
    }
  }
</style>

<script>
  export default {
    props: ["emoji", "icon", "name", "description", "hero"],
  }
</script>
