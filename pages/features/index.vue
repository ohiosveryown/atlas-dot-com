<template>
  <div class="app">
    <h1>feature index...</h1>

    <section class="features">
      <h3 class="tac inter">All-in-one</h3>
      <ul class="feature-grid">
        <li class="card" v-for="feature of featuresss" :key="feature.slug">
          <img class="icon" :src="`${feature.icon}`" />
          <NuxtLink :to="'/features/' + feature.slug">
            <h4 class="inter">{{ feature.name }}</h4>
            <p class="dark">{{ feature.subheader }}</p>
          </NuxtLink>
          <img class="hero" :src="`${feature.hero}`" />
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";
</style>

<script>
  export default {
    data: () => ({
      featuresss: null,
      features: null,
    }),
    async fetch() {
      this.featuresss = await this.$content("features", { deep: true })
        .sortBy("title", "asc")
        .where({ type: "all in one" })
        .fetch()

      this.features = await this.$content("features", { deep: true })
        .sortBy("title", "desc")
        .where({ type: "customer centric" })
        .fetch()
    },
    methods: {},
    mounted() {},
  }
</script>
