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
      currentCrewName: this.siteData.crew.map((e) => e.name)[0],
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
  @include medium {
    padding: 0 10px;
    flex: 1;
  }
  > {
    header {
      margin: 24px 0 32px;
      @extend %center-flex;
      gap: 16px;
      font-size: 16px;
      @include medium {
        align-self: flex-start;
        margin: 40px 39px 60px;
        font-size: 20px;
      }
      h2 {
        letter-spacing: 2.7px;
        font : {
          size: inherit;
          weight: normal;
        }
        @include medium {
          letter-spacing: 3.375px;
        }
      }
    }
    div.img {
      height: 222px;
      @include medium {
        order: 2;
        flex: 1;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
      }
      img {
        max-height: 100%;
        @include medium {
          position: absolute;
          &.custom-img {
            max-height: 572px;
          }
        }
      }
    }
    hr {
      background-color: #383b4b;
      width: 100%;
      height: 1px;
      border: none;
      @include medium {
        display: none;
      }
    }
    ul {
      margin: 32px 0;
      display: flex;
      gap: 16px;
      justify-self: center;
      @include medium {
        order: 1;
        margin: 40px 0;
      }
      li {
        aspect-ratio: 1/1;
        width: 10px;
        background-color: #979797;
        clip-path: circle();
        cursor: pointer;
        transition: background-color $main-transition;
        &.active {
          background-color: colors.$main-text;
        }
      }
    }
    div.info {
      @extend %column-flex;
      justify-content: center;
      font-family: "Bellefair", serif;
      span {
        color: #fff;
        opacity: 0.5;
        @include medium {
          font-size: 24px;
        }
      }
      h3 {
        margin: 8px 0 16px;
        font: {
          size: 24px;
          weight: normal;
        }
        @include medium {
          font-size: 40px;
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
        @include medium {
          font-size: 16px;
          line-height: 28px;
          text-wrap: balance;
          max-width: 81%;
        }
      }
    }
  }
}
</style>
