<template>
  <section class="crew">
    <header>
      <PageNumberSpan />
      <h2>meet your crew</h2>
    </header>
    <div class="img">
      <img
        :src="currentImg"
        alt="crew-img"
        :class="{ 'custom-img': currentCrewName === 'Douglas Hurley' }"
      />
    </div>
    <hr />
    <ul>
      <li
        v-for="crew in allCrew"
        :key="crew"
        :class="{ active: currentCrewName === crew }"
        @click="currentCrewName = crew"
      ></li>
    </ul>
    <div class="info">
      <span v-text="currentCrew.role"></span>
      <h3 v-text="currentCrew.name"></h3>
      <p v-text="currentCrew.bio"></p>
    </div>
  </section>
</template>

<script>
import PageNumberSpan from "@/components/PageNumberSpan";
export default {
  name: "CrewView",
  inject: {
    siteData: "siteData",
  },
  data() {
    return {
      currentCrewName: this.siteData.crew.map((e) => e.name)[1],
    };
  },
  components: {
    PageNumberSpan,
  },
  computed: {
    allCrew: function () {
      return this.siteData.crew.map((e) => e.name);
    },
    currentCrew: function () {
      return this.siteData.crew.filter(
        (e) => e.name === this.currentCrewName
      )[0];
    },
    currentImg: function () {
      return require(`../assets/crew/image-${this.currentCrewName
        .replace(" ", "-")
        .toLowerCase()}.png`);
    },
  },
};
</script>

<style lang="scss">
section.crew {
  @extend %column-flex;
  text-transform: uppercase;
  padding: 24px {
    top: 0;
  }
  @include small {
    padding: 0 10px;
    flex: 1;
    max-height: 1000px;
  }
  @include xLarge {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    padding: 62px 137px 0 166px;
    justify-items: start;
    max-height: 800px;
  }
  > {
    header {
      margin: 24px 0 32px;
      @extend %center-flex;
      gap: 16px;
      font-size: 16px;
      @include small {
        align-self: flex-start;
        margin: 40px 39px 60px;
        font-size: 20px;
      }
      @include xLarge {
        grid-area: 1 / 1 / span 1 / span 1;
        margin: 0;
        gap: 24px;
        font-size: 28px;
      }
      @include smallHeight {
        @include small {
          margin: 25px 15px 35px;
        }
        @include large {
          margin: 30px 30px 35px;
        }
        @include xLarge {
          margin: 0;
          font-size: 25px;
        }
      }
      h2 {
        letter-spacing: 2.7px;
        font : {
          size: inherit;
          weight: normal;
        }
        @include small {
          letter-spacing: 3.375px;
        }
        @include xLarge {
          letter-spacing: 4.725px;
        }
      }
    }
    div.img {
      height: 222px;
      @include small {
        order: 2;
        flex: 1;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
      }
      @include xLarge {
        grid-area: 2 / 2 / span 2 / span 1;
        overflow: visible;
        height: 100%;
      }
      &:has(img.custom-img) {
        @include small {
          margin-top: -20px;
        }
        @include xLarge {
          margin-top: 0;
        }
        @include smallHeight {
          margin-top: 0;
        }
      }
      img {
        height: 100%;
        @include small {
          position: absolute;
        }
        &.custom-img {
          @include small {
            top: 5%;
          }
          @include xLarge {
            left: 20px;
            top: -45px;
            height: calc(100% + 45px);
          }
          @include smallHeight {
            left: auto;
            top: auto;
            height: 100%;
          }
        }
      }
    }
    hr {
      background-color: #383b4b;
      width: 100%;
      height: 1px;
      border: none;
      @include small {
        display: none;
      }
    }
    ul {
      margin: 32px 0;
      display: flex;
      gap: 16px;
      justify-self: center;
      @include small {
        order: 1;
        margin: 40px 0;
      }
      @include xLarge {
        grid-area: 3 / 1 / span 1 / span 1;
        justify-self: start;
        gap: 24px;
        margin: 0 {
          bottom: 94px;
        }
      }
      @include smallHeight {
        @include small {
          margin: 25px 0;
        }
        @include xLarge {
          margin: 0 {
            bottom: 50px;
          }
        }
      }
      li {
        aspect-ratio: 1/1;
        width: 10px;
        background-color: #979797;
        clip-path: circle();
        cursor: pointer;
        transition: background-color $main-transition;
        @include xLarge {
          width: 15px;
        }
        &.active {
          background-color: colors.$main-text;
        }
        &:not(.active):hover {
          background-color: rgba(colors.$main-text, 0.8);
        }
      }
    }
    div.info {
      @extend %column-flex;
      justify-content: center;
      font-family: "Bellefair", serif;
      @include xLarge {
        grid-area: 2 / 1 / span 1 / span 1;
        align-items: flex-start;
        width: min-content;
      }
      span {
        color: #fff;
        opacity: 0.5;
        @include small {
          font-size: 24px;
        }
        @include xLarge {
          font-size: 32px;
        }
        @include smallHeight {
          @include small {
            font-size: 22px;
          }
          @include large {
            font-size: 24px;
          }
          @include xLarge {
            font-size: 26px;
          }
        }
      }
      h3 {
        white-space: nowrap;
        margin: 8px 0 16px;
        font: {
          size: 24px;
          weight: normal;
        }
        @include small {
          font-size: 40px;
        }
        @include xLarge {
          margin: 15px 9px 27px 0;
          color: #fff;
          font-size: 56px;
        }
        @include smallHeight {
          @include small {
            font-size: 32px;
            margin: 8px 0 10px;
          }
          @include large {
            font-size: 36px;
          }
          @include xLarge {
            font-size: 40px;
          }
        }
      }
      p {
        font-family: "Barlow", sans-serif;
        color: colors.$second-text;
        font-size: 15px;
        line-height: 25px;
        text: {
          transform: none;
          align: center;
        }
        @include small {
          font-size: 16px;
          line-height: 28px;
          text-wrap: balance;
          max-width: 81%;
        }
        @include xLarge {
          font-size: 18px;
          max-width: 444px;
          line-height: 3.5ex;
          height: calc(3.5ex * 5);
          text: {
            align: start;
            wrap: wrap;
          }
        }
        @include smallHeight {
          @include small {
            font-size: 15px;
          }
          @include large {
            font-size: 16px;
          }
          @include xLarge {
            font-size: 17px;
          }
        }
      }
    }
  }
}
</style>
