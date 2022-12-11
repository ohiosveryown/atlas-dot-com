<template>
  <div class="app">
    <HeaderMedium
      class="width page-header tac"
      heading="Make work life simpler and more productive"
      subheading="In 2020, a lightbulb went off. Could customer experience tools be all-in-one"
    />

    <main class="width">
      <section>
        <h3 class="tac">Our Co-founders</h3>
        <figure class="hero">
          <img
            src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/step-brothers-2008-geek-n-rock.jpg"
          />
        </figure>
      </section>

      <section>
        <article>
          <h3>Our Mission</h3>
          <p>
            Computers used to be magical. But much of that magic has been lost
            over time, replaced by subpar tools and practices that slow teams
            down and hold great work back.
          </p>
          <p>
            Frustrated with building and managing software projects in
            high-growth companies ourselves, we founded a company to build
            something better.
          </p>
        </article>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .page-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 4rem;
    @include breakpoint(md) {
      margin: 0 auto 6.4rem;
      width: grid-width(6);
    }
    @include breakpoint(lg) {
      width: grid-width(5);
    }
  }

  .hero,
  .hero > img {
    margin: 0 auto;
    border-radius: 8px;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 1.1;
    background: linear-gradient(180deg, #ffffff 0%, #d0c4e7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @include breakpoint(md) {
      margin-bottom: 1.6rem;
    }
  }

  h4 {
    margin-bottom: 2rem;
    font-size: 2.2rem;
    font-weight: 600;
    background: linear-gradient(180deg, #ffffff 0%, #d0c4e7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @include breakpoint(md) {
      margin-bottom: 1.6rem;
    }
  }

  section {
    margin-bottom: 6.4rem;
  }

  article {
    @include breakpoint(md) {
      margin: 0 auto 0;
      width: grid-width(9);
    }
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.9rem;
    color: #dfe0e2;
    @include breakpoint(md) {
      margin-bottom: 1.6rem;
    }
  }

  li {
    margin-left: 2.4rem;
    list-style: initial;
  }

  a {
    color: #a5a5ff;
    text-decoration: underline;
    transition: var(--ease);
  }

  @media (pointer: fine) {
    a:hover {
      color: #dfe0e2;
      text-decoration: none;
    }
  }
</style>

<script>
  export default {
    methods: {
      fadeIn() {
        gsap.from(".app", {
          opacity: 0,
          duration: 1.2,
          delay: 0.15,
          stagger: 0.15,
          ease: Power4.easeOut,
        })
      },
    },
    mounted() {
      this.fadeIn()
    },
  }
</script>
