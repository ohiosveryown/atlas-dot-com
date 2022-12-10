<template>
  <div class="width app">
    <HeaderLarge
      class="width"
      heading="Give your customers superhuman support"
      subheading="Atlas is a blazingly fast, modern support platform, helping identify and diagnose customer experience and interaction."
    />

    <hr />
    <btn :type="{ primary: true }" content="button label" />

    <h1 class="fs-xxl">
      Heading Number <br />
      One
    </h1>

    <h2 class="fs-xl">
      Heading Number <br />
      Two
    </h2>

    <h3 class="fs-lg founders">
      Heading Number <br />
      Three
    </h3>

    <h4 class="inter fs-md">
      Heading Number <br />
      Four
    </h4>

    <h5 class="fs-sm">
      Heading Number <br />
      Five
    </h5>

    <h6 class="fs-xs">
      Heading Number <br />
      Six
    </h6>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
      perferendis reprehenderit quasi laudantium voluptate officia vero
      recusandae nostrum voluptates, provident accusantium eum cum amet
      laboriosam magnam minus harum aliquam molestiae.
    </p>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
      perferendis reprehenderit quasi laudantium voluptate officia vero
      recusandae nostrum voluptates, provident accusantium eum cum amet
      laboriosam magnam minus harum aliquam molestiae.
    </p>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .app h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 4rem;
  }
</style>

<script>
  export default {}
</script>
