<template>
  <div class="shell">
    <img
      src="https://atlas-www-assets.s3.amazonaws.com/product--inbox-sm.png"
      alt=""
      class="sm"
    />

    <img
      src="https://atlas-www-assets.s3.amazonaws.com/app-preview/app-preview--nav-lg.png"
      alt=""
      class="lg nav"
    />

    <div class="row">
      <div class="timeline">
        <img
          src="https://atlas-www-assets.s3.amazonaws.com/app-preview/app-preview--zero-state-lg.png"
          alt=""
          class="welcome scroll-target"
        />

        <img
          src="https://atlas-www-assets.s3.amazonaws.com/app-preview/app-preview--chatbot-lg.png"
          alt=""
          class="integration scroll-target"
        />

        <img
          src="https://atlas-www-assets.s3.amazonaws.com/app-preview/app-preview--session-lg.png"
          alt=""
          class="session scroll-target"
        />

        <img
          src="https://atlas-www-assets.s3.amazonaws.com/app-preview/app-preview--chat-lg.png"
          alt=""
          class="thread scroll-target"
        />

        <img
          src="https://atlas-www-assets.s3.amazonaws.com/app-preview/app-preview--chat-end-lg.png"
          alt=""
          class="end scroll-target"
        />
      </div>

      <img
        src="https://atlas-www-assets.s3.amazonaws.com/app-preview/app-preview--aside-lg.png"
        alt=""
        class="aside"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .shell {
    @include breakpoint(md) {
      margin: 4rem 0;
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 20px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.04) 100%
      );
    }
  }

  .sm {
    display: flex;
    margin-top: 1.2rem;
    @include breakpoint(md) {
      display: none;
    }
  }

  .lg {
    display: none;
    @include breakpoint(md) {
      display: flex;
    }
  }

  .nav {
    display: none;

    @include breakpoint(md) {
      display: inherit;
      border-radius: 20px 20px 0px 0px;
    }
  }

  .row {
    display: none;

    @include breakpoint(md) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 2.4rem;
    }
  }

  .timeline {
    * {
      margin-bottom: 2.4rem;
    }

    *:last-of-type {
      margin-bottom: 0;
    }

    @include breakpoint(md) {
      width: grid-width(8.25);
      * {
        margin-bottom: 8rem;
      }

      *:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .aside {
    display: none;

    @include breakpoint(md) {
      display: inherit;
      width: grid-width(3.5);
      position: sticky;
      top: 5.2rem;
    }
  }
</style>

<script>
  export default {}
</script>
