<template>
  <section class="crew">
    <header>
      <PageNumberSpan />
      <h2>meet your crew</h2>
    </header>
    <img :src="currentImg" alt="crew-img" />
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
  text-transform: uppercase;
  display: grid;
  padding: 24px {
    top: 0;
  }
  > {
    header {
      margin: 24px 0 32px;
      @extend %center-flex;
      gap: 16px;
      font-size: 16px;
      h2 {
        letter-spacing: 2.7px;
        font : {
          size: inherit;
          weight: normal;
        }
      }
    }
    img {
      height: 222px;
      justify-self: center;
    }
    hr {
      background-color: #383b4b;
      width: 100%;
      height: 1px;
      border: none;
    }
    ul {
      margin: 32px 0;
      display: flex;
      gap: 16px;
      justify-self: center;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: "Bellefair", serif;
      span {
        color: #fff;
        opacity: 0.5;
      }
      h3 {
        margin: 8px 0 16px;
        font: {
          size: 24px;
          weight: normal;
        }
      }
      p {
        font-family: "Barlow", sans-serif;
        color: colors.$second-text;
        font-size: 15px;
        line-height: 25px; /* 166.667% */
        text: {
          transform: none;
          align: center;
        }
      }
    }
  }
}
</style>
