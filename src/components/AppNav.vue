<template>
  <nav>
    <img src="../assets/shared/logo.svg" alt="logo icon" />
    <div class="line"></div>
    <img
      src="../assets/shared/icon-hamburger.svg"
      alt="menu icon"
      @click="mobileMenu = true"
      v-if="!mobileMenu"
    />
    <img
      src="../assets/shared/icon-close.svg"
      alt="close icon"
      @click="mobileMenu = false"
      v-else
    />
    <ul v-show="mobileMenu">
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
  justify-content: space-between;
  align-items: center;
  padding: 24px {
    bottom: 0;
  }
  @include small {
    padding: 0 {
      left: 39px;
    }
  }
  @include large {
    padding: 40px 0 0 55px;
  }
  @include smallHeight {
    @include small {
      padding: 0 {
        left: 20px;
      }
    }
    @include large {
      padding-top: 12px;
    }
  }
  > {
    img:first-of-type {
      width: 40px;
      @include small {
        width: 48px;
      }
      @include smallHeight {
        @include small {
          width: 40px;
        }
      }
    }
    .line {
      display: none;
      @include xLarge {
        display: block;
        height: 1px;
        flex: 1;
        margin: 0 -47px 0 64px;
        background-color: #fff;
        opacity: 0.5;
      }
    }
    img:nth-of-type(2),
    img:last-of-type {
      cursor: pointer;
      @include small {
        display: none;
      }
    }
    img:last-of-type {
      z-index: 1;
    }
    ul {
      height: 100%;
      width: 254px;
      min-width: fit-content;
      max-width: calc(100% - 30px);
      position: absolute;
      top: 0;
      right: 0;
      padding: 110px 10px 10px 32px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      @extend %main-background;
      @include small {
        height: auto;
        width: auto;
        position: static;
        padding: 0 48px;
        display: flex !important;
        flex-direction: row;
        gap: 37px;
      }
      @include xLarge {
        padding: 0 165px 0 123px;
        gap: 48px;
      }
      > li {
        cursor: pointer;
        text-transform: uppercase;
        counter-increment: route;
        letter-spacing: 2.7px;
        position: relative;
        width: fit-content;
        padding: 10px 0;
        user-select: none;
        @include small {
          letter-spacing: 2.36px;
          padding: 39px 0;
          font-size: 14px;
        }
        @include large {
          letter-spacing: 2.7px;
          font-size: 16px;
        }
        @include smallHeight {
          @include small {
            padding: 25px 0;
          }
        }
        &:first-of-type {
          counter-set: route 0;
        }
        &::before {
          content: "0" counter(route);
          padding-right: 12px;
          font-weight: bold;
          @include small {
            display: none;
          }
          @include large {
            display: initial;
          }
        }
        &::after {
          content: "";
          width: 100%;
          height: 3px;
          background-color: currentColor;
          position: absolute;
          left: 0;
          bottom: 0;
          opacity: 0;
          transition: $main-transition;
        }
        &.active::after {
          opacity: 1;
        }
        &:not(.active):hover::after {
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
