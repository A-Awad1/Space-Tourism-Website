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
body {
  background-color: colors.$main-background;
}
#app {
  // start background
  background: {
    attachment: fixed;
    repeat: no-repeat;
    size: cover;
  }
  @mixin backgroundImage($page) {
    background-image: url(assets/#{$page}/background-mobile.jpg);
    @include small {
      background-image: url(assets/#{$page}/background-tablet.jpg);
    }
    @include large {
      background-image: url(assets/#{$page}/background-desktop.jpg);
    }
    @include smallHeight {
      @media (min-width: 800px) {
        background-image: url(assets/#{$page}/background-desktop.jpg);
      }
    }
  }
  @include backgroundImage("home");
  &:has(section.destinations) {
    @include backgroundImage("destinations");
  }
  &:has(section.crew) {
    @include backgroundImage("crew");
  }
  &:has(section.technology) {
    @include backgroundImage("technology");
  }
  // end background
  min-height: 100vh;
}
</style>
