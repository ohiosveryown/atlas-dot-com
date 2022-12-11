<template>
  <div class="width app">
    <HeaderLarge
      class="width"
      heading="Give your customers superhuman support"
      subheading="Atlas is a blazingly fast, modern support platform, helping identify and diagnose customer experience and interaction."
    />

    <figure class="skew-enter">
      <img
        src="https://atlas-www-assets.s3.amazonaws.com/hero--customer-profile.png"
        alt="Atlas – Customer Profile Page"
      />
    </figure>

    <section class="skew-enter features">
      <ul v-for="feature of features" :key="feature.slug">
        <card
          :icon="`${feature.icon}`"
          :name="`${feature.name}`"
          :description="`${feature.description}`"
          :hero="`${feature.hero}`"
        />
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";
</style>

<script>
  import { skewEnter } from "../logic/anim.js"
  export default {
    data: () => ({
      features: null,
    }),
    async fetch() {
      this.features = await this.$content("features", { deep: true })
        .sortBy("title", "desc")
        // .where({ type: "customer centric" })
        .fetch()
    },
    mounted() {
      skewEnter()
    },
  }
</script>
