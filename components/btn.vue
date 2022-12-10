<template>
  <button :class="type" class="fs-xs inter">
    {{ content }}
  </button>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  button {
    padding: 0.6rem 1.6rem 0.7rem;
    border-radius: 100px;
    color: #fff;
    font-weight: 500;
    text-transform: capitalize;
    transition: filter 300ms ease;
  }

  @media (pointer: fine) {
    button:hover {
      filter: hue-rotate(20deg);
    }
  }

  .primary {
    background: var(--gradient-brand);
  }

  .secondary {
    background: red;
  }
</style>

<script>
  export default {
    props: ["type", "content"],
  }
</script>
