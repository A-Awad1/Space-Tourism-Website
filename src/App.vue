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
html {
  height: 100%;
  min-height: fit-content;
  width: fit-content;
  min-width: 100%;
  background-color: colors.$main-background;
}
body {
  height: 100%;
  min-height: fit-content;
  min-width: fit-content;
}
#app {
  height: fit-content;
  min-height: 100%;
  min-width: 375px;
  font-family: "Barlow Condensed", sans-serif;
  color: colors.$main-text;
  position: relative;
  background : {
    repeat: no-repeat;
    size: cover;
  }
  display: flex;
  flex-direction: column;
}
</style>
