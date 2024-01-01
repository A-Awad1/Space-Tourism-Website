<template>
  <section class="destinations">
    <!-- <p
      v-for="destination in siteData.destinations"
      :key="destination"
      v-text="destination"
    ></p> -->
  </section>
</template>

<script>
export default {
  name: "DestinationsView",
  inject: {
    siteData: "siteData",
  },
};
</script>

<style lang="scss"></style>
