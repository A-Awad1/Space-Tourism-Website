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

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include xLarge {
    justify-content: center;
  }
  padding: 24px;
  @include small {
    padding: 0 {
      left: 39px;
    }
  }
  @include xxLarge {
    padding: 40px 0 0 55px;
  }
  > img {
    &:first-of-type {
      width: 40px;
      @include small {
        width: 48px;
      }
    }
    &:last-of-type {
      cursor: pointer;
      @include small {
        display: none;
      }
    }
  }
  .line {
    display: none;
    @include xLarge {
      background-color: colors.$second-text;
      display: initial;
      height: 1px;
      flex: 1;
      max-width: 800px;
      margin: 0 -10px 0 64px;
      z-index: 4;
      filter: drop-shadow(0 4px 4px 0 #000);
    }
    @include xxLarge {
      margin-right: -47px;
    }
  }
  ul {
    height: 100%;
    width: 250px;
    position: absolute;
    right: 0;
    top: 0;
    padding: 118px 10px 10px 32px;
    letter-spacing: 2.7px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #1e212d;
    z-index: 3;
    @include small {
      display: flex !important;
      flex-direction: row;
      height: auto;
      width: auto;
      background-color: #161923;
      position: static;
      letter-spacing: 2.36px;
      padding: 0 30px;
      gap: 20px;
    }
    @include medium {
      gap: 37px;
      padding: 0 48px;
    }
    @include xxLarge {
      padding: 0 167px 0 123px;
      letter-spacing: 2.7px;
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
      padding: 10px 0;
      @include small {
        padding: 40px 0;
      }
      &::before {
        content: "0" counter(route);
        font-weight: bold;
        padding-right: 12px;
        @include small {
          display: none;
        }
        @include xLarge {
          display: initial;
        }
      }
      &::after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: currentColor;
        transition: $main-transition;
        position: absolute;
        left: 0;
        bottom: 0;
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
