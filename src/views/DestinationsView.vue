<template>
  <section class="destinations">
    <header>
      <PageNumberSpan />
      <h2>pick your destination</h2>
    </header>
    <ul></ul>
  </section>
</template>

<script>
import PageNumberSpan from "@/components/PageNumberSpan";
export default {
  name: "DestinationsView",
  inject: {
    siteData: "siteData",
  },
  components: {
    PageNumberSpan,
  },
};
</script>
<style lang="scss"></style>
