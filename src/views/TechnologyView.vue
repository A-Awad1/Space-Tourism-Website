<template>
  <section class="technology">
    <header>
      <PageNumberSpan />
      <h2>space launch 101</h2>
    </header>
    <main>
      <div class="img">
        <img :src="currentImg" alt="technology-img" />
      </div>
      <ul>
        <li
          v-for="tech in allTech"
          :key="tech"
          :class="{ active: currentTechName === tech }"
          @click="currentTechName = tech"
        ></li>
      </ul>
      <div class="info">
        <span>the terminology…</span>
        <h3 v-text="currentName"></h3>
        <p v-html="currentDesc"></p>
      </div>
    </main>
  </section>
</template>

<script>
import PageNumberSpan from "@/components/PageNumberSpan";
export default {
  name: "TechnologyView",
  inject: {
    siteData: "siteData",
  },
  data() {
    return {
      currentTechName: this.siteData.technology.map((e) => e.name)[0],
    };
  },
  computed: {
    allTech: function () {
      return this.siteData.technology.map((e) => e.name);
    },
    currentTech: function () {
      return this.siteData.technology.filter(
        (e) => e.name === this.currentTechName
      )[0];
    },
    currentImg: function () {
      return require(`../assets/technology/image-${this.currentTechName
        .replace(" ", "-")
        .toLowerCase()}-landscape.jpg`);
      // portrait
    },
    currentName: function () {
      return this.currentTech.name;
    },
    currentDesc: function () {
      return this.currentTech.description.replaceAll("-", "&#8209;");
    },
  },
  components: {
    PageNumberSpan,
  },
};
</script>
<style lang="scss">
section.technology {
  text-transform: uppercase;
  > {
    header {
      @extend %center-flex;
      gap: 16px;
      margin: 24px 0 32px;
      h2 {
        letter-spacing: 2.7px;
        font: {
          size: 16px;
          weight: normal;
        }
      }
    }
    main {
      @extend %column-flex;
      > {
        div.img {
          img {
            max-width: 100%;
          }
        }
        ul {
          display: flex;
          gap: 16px;
          margin: 34px 0 26px;
          li {
            counter-increment: vehicle;
            aspect-ratio: 1/1;
            width: 40px;
            font-family: "Bellefair", serif;
            letter-spacing: 1px;
            cursor: pointer;
            --border-opacity: 0.25;
            border: 1px solid rgba(colors.$main-text, var(--border-opacity));
            border-radius: 50%;
            transition: $main-transition;
            @extend %center-flex;
            &::before {
              content: counter(vehicle);
            }
            &.active {
              color: colors.$third-text;
              background-color: colors.$main-text;
            }
            &:not(.active):hover {
              --border-opacity: 1;
            }
          }
        }
        div.info {
          @extend %column-flex;
          > {
            span {
              color: colors.$second-text;
              font-size: 14px;
              letter-spacing: 2.362px;
            }
            h3 {
              margin: 9px 0 16px;
              font: {
                family: "Bellefair", serif;
                size: 24px;
                weight: normal;
              }
            }
            p {
              text-transform: none;
              color: colors.$second-text;
              text-align: center;
              line-height: 25px;
              margin: 0 24px;
              hyphens: nowrap;
              font: {
                family: "Barlow", sans-serif;
                size: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
