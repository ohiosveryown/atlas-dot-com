<template>
  <button :class="type" class="fs-xs inter">
    {{ content }}
  </button>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  button {
    padding: 0.8rem 1.6rem 0.9rem;
    border-radius: 100px;
    color: #fff;
    font-weight: 200 !important;
    text-transform: capitalize;
    transition: filter 300ms ease;
  }

  .primary {
    background: var(--gradient-brand);
  }

  .secondary {
    background: red;
  }

  @media (pointer: fine) {
    button:hover {
      filter: hue-rotate(20deg);
    }
  }
</style>

<script>
  export default {
    props: ["type", "content"],
  }
</script>
