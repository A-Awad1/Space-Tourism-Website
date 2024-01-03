<template>
  <section class="home">
    <div>
      <span>so, you want to travel to</span>
      <h1>space</h1>
      <p v-text="siteData.intro"></p>
    </div>
    <button @click="explore">explore</button>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  inject: {
    siteData: "siteData",
  },
  methods: {
    explore: function () {
      this.$router.push({ name: "destinations" });
    },
  },
};
</script>

<style lang="scss">
section.home {
  flex: 1;
  padding: 48px 6.5vw;
  @extend %column-flex;
  justify-content: space-between;
  gap: 81px;
  @include small {
    padding: 106px 24px 90px;
  }
  @include xLarge {
    flex-direction: row;
    padding: 251px 165px 131px;
  }
  > {
    div {
      @extend %column-flex;
      gap: 16px;
      @include small {
        gap: 24px;
        width: min-content;
      }
      @include xLarge {
        align-items: flex-start;
      }
      > {
        span {
          color: colors.$second-text;
          letter-spacing: 2.7px;
          text-transform: uppercase;
          white-space: nowrap;
          @include small {
            font-size: 20px;
            letter-spacing: 3.38px;
          }
          @include xLarge {
            font-size: 28px;
            letter-spacing: 4.72px;
          }
        }
        h1 {
          text-transform: uppercase;
          line-height: 100px;
          font: {
            weight: normal;
            family: "Bellefair", serif;
            size: 80px;
          }
          @include small {
            line-height: 150px;
            font-size: 150px;
          }
          @include xLarge {
            line-height: normal;
          }
        }
        p {
          color: colors.$second-text;
          line-height: 25px;
          text-align: center;
          font: {
            family: "Barlow", sans-serif;
            size: 15px;
          }
          @include small {
            line-height: 28px;
            font-size: 16px;
          }
          @include xLarge {
            line-height: 32px;
            font-size: 18px;
            text-align: initial;
          }
        }
      }
    }
    button {
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1.25px;
      color: colors.$main-background;
      border: none;
      border-radius: 50%;
      aspect-ratio: 1/1;
      --dimension: 150px;
      width: var(--dimension);
      transition: box-shadow $second-transition;
      font: {
        family: "Bellefair", serif;
        size: 20px;
      }
      &:hover {
        $shadow: calc(var(--dimension) * 31 / 100);
        box-shadow: 0 0 0 $shadow colors.$main-background;
      }
      @include small {
        --dimension: 242px;
        letter-spacing: 2px;
        font-size: 32px;
      }
      @include xLarge {
        --dimension: 274px;
      }
    }
  }
}
</style>
