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
#app {
  background-image: url(../assets/home/background-home-mobile.jpg);
  @include small {
    background-image: url(../assets/home/background-home-tablet.jpg);
  }
  @include large {
    background-image: url(../assets/home/background-home-desktop.jpg);
  }
  .container:has(section.home) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include medium {
      justify-content: flex-end;
    }
  }
  section.home {
    text-transform: uppercase;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    @include medium {
      flex: 1;
      justify-content: space-between;
      gap: 10px;
      padding: 9vh 129px 10vh;
    }
    @include large {
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-end;
      flex: auto;
      gap: 80px;
      padding: 0 0 14.5vh;
    }
    > div {
      color: colors.$second-text;
      @extend %center-flex;
      flex-direction: column;
      gap: 16px;
      @include medium {
        gap: 2.3vh;
      }
      @include large {
        width: min-content;
        align-items: start;
        margin-left: -30px;
        gap: 24px;
      }
      > {
        span {
          letter-spacing: 3.38px;
          font-size: 20px;
          white-space: nowrap;
          @include large {
            letter-spacing: 4.72px;
            font-size: 3.12vh;
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
            line-height: 14.7vh;
            font-size: 14.65vh;
          }
          @include large {
            line-height: normal;
            font-size: 16.6667vh;
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
          @include large {
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
      border: none;
      border-radius: 50%;
      color: colors.$main-background;
      text-transform: inherit;
      letter-spacing: 1.25px;
      @extend %center-flex;
      cursor: pointer;
      position: relative;
      z-index: 1;
      font: {
        family: "Bellefair", serif;
        size: 20px;
      }
      @include small {
        margin-bottom: -16px;
      }
      @include medium {
        font-size: 3.125vh;
        letter-spacing: 2px;
        width: 23.64vh;
      }
      @include large {
        margin-bottom: 0;
        font-size: 3.55555vh;
        width: 30.4445vh;
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
