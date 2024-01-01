<template>
  <nav>
    <img src="../assets/shared/logo.svg" alt="logo icon" />
    <div class="line"></div>
    <img
      src="../assets/shared/icon-hamburger.svg"
      alt="menu icon"
      @click="mobileMenu = true"
    />
    <ul v-show="mobileMenu">
      <img
        src="../assets/shared/icon-close.svg"
        alt="close icon"
        @click="mobileMenu = false"
      />
      <router-link
        v-for="route in routes"
        :key="route"
        :to="{ name: route }"
        custom
        v-slot="{ navigate }"
      >
        <li
          role="link"
          @click="navigate"
          @keypress.enter="navigate"
          v-text="route"
          :class="{ active: currentRoute === route }"
        ></li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNav",
  data: function () {
    return {
      mobileMenu: false,
    };
  },
  computed: {
    currentRoute: function () {
      return this.$route.name;
    },
    routes: function () {
      return this.$router
        .getRoutes()
        .map((e) => e.name)
        .filter((e) => e !== undefined);
    },
  },
};
</script>

<style lang="scss"></style>
