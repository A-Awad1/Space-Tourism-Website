<template>
  <AppNav />
  <router-view />
</template>

<script>
import AppNav from "@/components/AppNav";
import siteData from "./data.json";
export default {
  provide: {
    siteData,
  },
  components: {
    AppNav,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Barlow:wght@400;700&family=Bellefair&display=swap");
#app {
}
</style>
