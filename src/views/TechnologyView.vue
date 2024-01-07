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
        <h3 v-text="currentTech.name"></h3>
        <p v-text="currentTech.description"></p>
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
  },
  components: {
    PageNumberSpan,
  },
};
</script>
<style lang="scss">
section.technology {
  > {
    header {
      h2 {
      }
    }
    main {
      > {
        div.img {
          img {
          }
        }
        ul {
          li {
          }
        }
        div.info {
          > {
            span {
            }
            h3 {
            }
            p {
            }
          }
        }
      }
    }
  }
}
</style>
