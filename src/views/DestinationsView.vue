<template>
  <section class="destinations">
    <header>
      <PageNumberSpan />
      <h2>pick your destination</h2>
    </header>
    <ul>
      <li
        v-for="dest in allDest"
        :key="dest"
        v-text="dest"
        @click="currentDestName = dest"
      ></li>
    </ul>
    <h3 v-text="currentDest.name"></h3>
    <p v-text="currentDest.description"></p>
    <hr />
    <div>
      <span>avg. distance</span>
      <span v-text="currentDest.distance"></span>
    </div>
    <div>
      <span>est. travel time</span>
      <span v-text="currentDest.travel"></span>
    </div>
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
  },
  components: {
    PageNumberSpan,
  },
};
</script>
<style lang="scss"></style>
