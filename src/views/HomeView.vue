<template>
  <div class="container">
    <section class="home">
      <div>
        <span>so, you want to travel to</span>
        <h1>space</h1>
        <p v-text="siteData.intro"></p>
      </div>
      <button @click="explore">explore</button>
    </section>
  </div>
</template>

<script>
import siteData from "../data.json";
export default {
  name: "HomeView",
  data: function () {
    return {
      siteData,
    };
  },
  methods: {
    explore: function () {
      this.$router.push({ name: "destinations" });
    },
  },
};
</script>

<style lang="scss">
#app {
  background-image: url(../assets/home/background-home-mobile.jpg);
  @include medium {
    background-image: url(../assets/home/background-home-tablet.jpg);
  }
  @include large {
    background-image: url(../assets/home/background-home-desktop.jpg);
  }
  .container:has(section.home) {
    flex: 1;
    display: flex;
    flex-direction: column;
    @include xxLarge {
      justify-content: end;
    }
  }
  section.home {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    padding: 24px 12px;
    @include medium {
      padding: 106px 129px 0;
    }
    @include xxLarge {
      flex-direction: row;
      justify-content: space-between;
      padding: 70px 0 131px 93px;
      gap: 100px;
    }
    > div {
      @extend %center-flex;
      flex-direction: column;
      gap: 16px;
      @include medium {
        gap: 24px;
      }
      color: colors.$second-text;
      @include xxLarge {
        width: min-content;
        align-items: start;
      }
      > {
        span {
          letter-spacing: 3.38px;
          font-size: 20px;
          @include xxLarge {
            letter-spacing: 4.72px;
            font-size: 28px;
          }
        }
        h1 {
          color: colors.$main-text;
          font: {
            family: "Bellefair", serif;
            size: 80px;
            weight: normal;
          }
          @include medium {
            line-height: 150px;
            font-size: 150px;
          }
          @include xxLarge {
            line-height: normal;
          }
        }
        p {
          text-align: center;
          text-transform: initial;
          line-height: 25px;
          font: {
            family: "Barlow", sans-serif;
            size: 15px;
          }
          @include medium {
            line-height: 28px;
            font-size: 16px;
          }
          @include xxLarge {
            text-align: left;
            line-height: 32px;
            font-size: 18px;
          }
        }
      }
    }
    > button {
      aspect-ratio: 1/1;
      width: 150px;
      border-radius: 50%;
      border: none;
      text-transform: inherit;
      color: colors.$main-background;
      letter-spacing: 1.25px;
      @extend %center-flex;
      margin: 81px auto 0;
      cursor: pointer;
      position: relative;
      z-index: 1;
      font: {
        family: "Bellefair", serif;
        size: 20px;
      }
      @include medium {
        width: 242px;
        font-size: 32px;
        letter-spacing: 2px;
        margin-top: 156px;
      }
      @include xxLarge {
        margin-right: 93px;
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        aspect-ratio: inherit;
        border-radius: inherit;
      }
      &::before {
        width: 100%;
        background-color: colors.$main-text;
        z-index: -1;
      }
      &::after {
        width: 164%;
        background-color: colors.$main-text;
        z-index: -2;
        opacity: 0;
        transition: opacity $main-transition;
      }
      &:hover::after {
        opacity: 0.1;
      }
    }
  }
}
</style>
