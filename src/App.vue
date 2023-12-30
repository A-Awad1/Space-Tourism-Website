<template>
  <AppNav />
  <router-view />
</template>

<script>
import AppNav from "@/components/AppNav";
export default {
  components: {
    AppNav,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Barlow:wght@400;700&family=Bellefair&display=swap");
html,
body,
#app {
  height: 100%;
  width: 100%;
}
html {
  min-width: fit-content;
  background-color: colors.$main-background;
}
#app {
  min-width: 375px;
  font-family: "Barlow Condensed", sans-serif;
  color: colors.$main-text;
  position: relative;
}
</style>
