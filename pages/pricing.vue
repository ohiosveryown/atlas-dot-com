<template>
  <div class="app">
    <HeaderMedium
      class="width page-header tac"
      heading="Pricing"
      subheading="Choose a plan that works for your team"
    />

    <main class="width">
      <section class="pricing-cards">
        <card-pricing />
      </section>

      <section class="signup">
        <signup
          heading="Have Questions?"
          subheading="Schedule a chat with out co-founder to get the answers you need."
        />
      </section>

      <section class="table">
        <table>
          <tr class="sticky">
            <th style="opacity: 0.1">RM</th>
            <th class="tal">Startup</th>
            <th class="tal">Growth</th>
            <th class="tal">Enterprise</th>
          </tr>

          <tr>
            <td class="header inter">Ticketing</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Tags and Tag Groups</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>

          <tr>
            <td>Set Status</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>

          <tr>
            <td>Snooze Tickers</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>

          <tr>
            <td>Set Priority</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>

          <tr>
            <td>Assign to Teammates</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>

          <tr>
            <td>Create Custom Inboxes</td>
            <td></td>
            <td>✓</td>
            <td>✓</td>
          </tr>

          <tr>
            <td>Set Macros</td>
            <td></td>
            <td>✓</td>
            <td>✓</td>
          </tr>
        </table>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  section.table table {
    width: 100%;
  }

  table tr.sticky {
    position: sticky;
    top: 6.4rem;
    background: #0b0220;
  }

  table td.header {
    font-size: 1.7rem;
    color: hsla(0, 0%, 100%, 0.7);
  }

  table td {
    padding: 1.2rem 0;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
    font-size: 2rem;
  }

  section.signup {
    margin-bottom: 11.2rem;
  }

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
