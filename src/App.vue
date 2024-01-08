<template>
  <AppNav />
  <router-view />
  <div class="overlay"></div>
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
html,
body,
#app {
  height: 100%;
  width: 100%;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
}
body {
  // start background
  background: {
    color: colors.$third-text;
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
}
#app {
  min-width: 300px;
  min-height: 667px;
  position: relative;
  color: colors.$main-text;
  font-family: "Barlow Condensed", sans-serif;
  .overlay {
    display: none;
  }
  > section.crew + .overlay {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: colors.$third-text;
    opacity: 0.6;
    z-index: -1;
  }
}
</style>
