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
        @click="currentDest = dest"
      ></li>
    </ul>
    {{ currentDestData }}
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
      currentDest: this.siteData.destinations.map((e) => e.name)[0],
    };
  },
  computed: {
    allDest: function () {
      return this.siteData.destinations.map((e) => e.name);
    },
    currentDestData: function () {
      return this.siteData.destinations.filter(
        (e) => e.name === this.currentDest
      );
    },
  },
  components: {
    PageNumberSpan,
  },
};
</script>
<style lang="scss"></style>
