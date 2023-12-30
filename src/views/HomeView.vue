<template>
  <div class="container">
    <section class="home">
      <div>
        <span>so, you want to travel to</span>
        <h1>space</h1>
        <p v-text="siteData.intro"></p>
      </div>
      <button>explore</button>
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
};
</script>

<style lang="scss">
#app {
  background : {
    image: url(../assets/home/background-home-mobile.jpg);
    repeat: no-repeat;
    size: cover;
  }
  @include medium {
    background-image: url(../assets/home/background-home-tablet.jpg);
  }
  @include large {
    background-image: url(../assets/home/background-home-desktop.jpg);
  }
  section.home {
    padding: 24px 12px;
    text-transform: uppercase;
    > div {
      @extend %center-flex;
      flex-direction: column;
      gap: 16px;
      text-align: center;
      color: colors.$second-text;
      span {
        letter-spacing: 2.7px;
      }
      > {
        h1 {
          color: colors.$main-text;
          font: {
            family: "Bellefair", serif;
            size: 80px;
            weight: normal;
          }
        }
        p {
          text-transform: initial;
          line-height: 25px;
          font: {
            family: "Barlow", sans-serif;
            size: 15px;
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
        background-color: colors.$main-background;
        z-index: -2;
        opacity: 0;
        transition: opacity $main-transition;
      }
      &:hover::after {
        opacity: 1;
      }
    }
  }
}
</style>
