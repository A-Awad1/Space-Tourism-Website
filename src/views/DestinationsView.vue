<template>
  <section class="destinations">
    <header>
      <PageNumberSpan />
      <h2>pick your destination</h2>
    </header>
    <main>
      <ul>
        <li
          v-for="dest in allDest"
          :key="dest"
          v-text="dest"
          :class="['option-hover', { active: currentDestName === dest }]"
          @click="currentDestName = dest"
        ></li>
      </ul>
      <h3 v-text="currentDest.name"></h3>
      <p v-text="currentDest.description"></p>
      <hr />
      <div>
        <div>
          <span>avg. distance</span>
          <span v-text="currentDest.distance"></span>
        </div>
        <div>
          <span>est. travel time</span>
          <span v-text="currentDest.travel"></span>
        </div>
      </div>
      <img :src="currentImg" />
    </main>
  </section>
</template>

<script>
import PageNumberSpan from "@/components/PageNumberSpan";
export default {
  name: "DestinationsView",
  inject: {
    siteData: "siteData",
  },
  data() {
    return {
      currentDestName: this.siteData.destinations.map((e) => e.name)[0],
    };
  },
  computed: {
    allDest: function () {
      return this.siteData.destinations.map((e) => e.name);
    },
    currentDest: function () {
      return this.siteData.destinations.filter(
        (e) => e.name === this.currentDestName
      )[0];
    },
    currentImg: function () {
      return require(`../assets/destinations/image-${this.currentDestName.toLowerCase()}.png`);
    },
  },
  components: {
    PageNumberSpan,
  },
};
</script>
<style lang="scss">
section.destinations {
  text-transform: uppercase;
  > {
    header {
      @extend %center-flex;
      gap: 18px;
      margin: 24px 0 32px;
      @include medium {
        justify-content: flex-start;
        gap: 19px;
        margin: 40px {
          bottom: 60px;
        }
      }
      h2 {
        font: {
          size: 16px;
          weight: normal;
        }
        letter-spacing: 2.7px;
        line-height: normal;
        @include medium {
          font-size: 20px;
          letter-spacing: 3.375px;
        }
      }
    }
    main {
      @extend %column-flex;
      padding: 24px {
        top: 0;
      }
      @include medium {
        padding: 0 97px 12px;
      }
      > {
        ul {
          display: flex;
          gap: 27px;
          margin: 26px 0 20px;
          @include medium {
            margin: 53px 0 32px;
          }
          li {
            font-size: 14px;
            letter-spacing: 2.362px;
            padding-bottom: 11px;
            cursor: pointer;
            position: relative;
            color: colors.$second-text;
            line-height: normal;
            user-select: none;
            @include medium {
              font-size: 16px;
              letter-spacing: 2.7px;
              padding-bottom: 15px;
            }
          }
        }
        h3 {
          font: {
            family: "Bellefair", serif;
            weight: normal;
            size: 56px;
          }
          @include medium {
            font-size: 80px;
          }
        }
        p {
          margin: 1px;
          color: colors.$second-text;
          line-height: 166.667%;
          text: {
            transform: none;
            align: center;
          }
          font: {
            family: "Barlow", sans-serif;
            size: 15px;
          }
          @include medium {
            margin-top: 8px;
            line-height: 175%;
            font-size: 16px;
          }
        }
        hr {
          background-color: #383b4b;
          width: 100%;
          height: 1px;
          border: none;
          margin: 32px 0;
          @include medium {
            margin: 49px 0 28px;
          }
        }
        div {
          @include medium {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
          }
          > div {
            @extend %column-flex;
            gap: 12px;
            &:first-of-type {
              margin-bottom: 32px;
              @include medium {
                margin-bottom: 0;
              }
            }
            span {
              text-align: center;
              line-height: normal;
            }
            span:first-child {
              color: colors.$second-text;
              letter-spacing: 2.362px;
              font-size: 14px;
            }
            span:last-child {
              font: {
                size: 28px;
                family: "Bellefair", serif;
              }
            }
          }
        }
        img {
          width: 170px;
          order: -1;
          @include medium {
            width: 300px;
          }
        }
      }
    }
  }
}
</style>
