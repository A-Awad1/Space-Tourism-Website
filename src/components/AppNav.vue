<template>
  <nav>
    <img src="../assets/shared/logo.svg" alt="logo icon" />
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
          @click="
            currentRoute = route;
            navigate();
          "
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
      currentRoute: "home",
      mobileMenu: false,
    };
  },
  computed: {
    routes: function () {
      return this.$router
        .getRoutes()
        .map((e) => e.name)
        .filter((e) => e !== undefined);
    },
  },
};
</script>

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  > img {
    &:first-of-type {
      width: 40px;
    }
    &:last-of-type {
      cursor: pointer;
      @include small {
        display: none;
      }
    }
  }
  ul {
    height: 100%;
    width: 67%;
    position: absolute;
    right: 0;
    top: 0;
    padding: 118px 10px 10px 32px;
    letter-spacing: 2.7px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: #1e212d;
    @include small {
      display: flex !important;
      flex-direction: row;
      height: auto;
      width: auto;
      position: static;
      padding: 40px 48px;
      letter-spacing: 2.7px;
      gap: 32px;
      background: #1e212d;
    }
    > img {
      position: absolute;
      width: 20px;
      top: 34px;
      right: 27px;
      cursor: pointer;
      @include small {
        display: none;
      }
    }
    li {
      &:first-of-type {
        counter-set: route 0;
      }
      cursor: pointer;
      counter-increment: route;
      text-transform: uppercase;
      position: relative;
      width: fit-content;
      user-select: none;
      &::before {
        content: "0" counter(route);
        font-weight: bold;
        padding-right: 12px;
      }
      &::after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: currentColor;
        position: absolute;
        bottom: -12px;
        left: 0;
        transition: $main-transition;
      }
      &:not(.active) {
        &::after {
          opacity: 0;
        }
        &:hover::after {
          opacity: 0.5;
        }
        &:active::after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
