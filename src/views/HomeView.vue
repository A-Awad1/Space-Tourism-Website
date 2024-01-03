<template>
  <section class="home">
    <div>
      <span>so, you want to travel to</span>
      <h1>space</h1>
      <p v-text="siteData.intro"></p>
    </div>
    <button @click="explore">explore</button>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  inject: {
    siteData: "siteData",
  },
  methods: {
    explore: function () {
      this.$router.push({ name: "destinations" });
    },
  },
};
</script>

<style lang="scss">
section.home {
  flex: 1;
  @extend %column-flex;
  justify-content: space-around;
  gap: 81px;
  padding: 106px 10vw 90px;
  @include medium {
    padding: 75px 24px;
  }
  @include large {
    padding: 60px 24px 77px;
  }
  @include xLarge {
    flex-direction: row;
    align-content: space-around;
    flex-wrap: wrap;
    padding: 10px {
      top: 125px;
    }
  }
  @include smallHeight {
    padding: 48px 6.5vw;
    @include small {
      padding: 55px 10vw;
    }
    @include medium {
      padding: 55px 18vw;
    }
    @include large {
      padding: 44px 25vw 55px;
    }
    @include xLarge {
      padding: 10px;
    }
  }
  > {
    div {
      @extend %column-flex;
      gap: 16px;
      @include small {
        gap: 24px;
      }
      @include medium {
        width: min-content;
      }
      @include xLarge {
        align-items: flex-start;
      }
      @include smallHeight {
        @include small {
          gap: 16px;
        }
        @include medium {
          gap: 24px;
          width: auto;
        }
        @include xLarge {
          width: min-content;
        }
      }
      > {
        span {
          color: colors.$second-text;
          letter-spacing: 2.7px;
          text-transform: uppercase;
          white-space: nowrap;
          @include small {
            font-size: 18px;
            letter-spacing: 3.38px;
          }
          @include medium {
            font-size: 20px;
          }
          @include xLarge {
            font-size: 28px;
            letter-spacing: 4.72px;
          }
          @include smallHeight {
            @include small {
              font-size: initial;
            }
            @include medium {
              font-size: 20px;
            }
            @include xLarge {
              font-size: 22px;
              letter-spacing: 3.38px;
            }
          }
        }
        h1 {
          text-transform: uppercase;
          line-height: 100px;
          font: {
            weight: normal;
            family: "Bellefair", serif;
            size: 80px;
          }
          @include small {
            font-size: 100px;
          }
          @include medium {
            font-size: 150px;
            line-height: 150px;
          }
          @include large {
            line-height: 120px;
          }
          @include xLarge {
            line-height: normal;
          }
          @include smallHeight {
            @include small {
              font-size: 90px;
            }
            @include medium {
              font-size: 100px;
              line-height: normal;
            }
            @include xLarge {
              font-size: 110px;
              width: 444px;
            }
          }
        }
        p {
          color: colors.$second-text;
          line-height: 25px;
          text-align: center;
          font: {
            family: "Barlow", sans-serif;
            size: 15px;
          }
          @include small {
            font-size: 16px;
            line-height: 28px;
          }
          @include xLarge {
            line-height: 32px;
            font-size: 18px;
            text-align: initial;
          }
          @include smallHeight {
            @include xLarge {
              line-height: 32px;
              font-size: 18px;
              text-align: initial;
            }
          }
        }
      }
    }
    button {
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1.25px;
      color: colors.$main-background;
      border: none;
      border-radius: 50%;
      aspect-ratio: 1/1;
      --dimension: 150px;
      width: var(--dimension);
      transition: box-shadow $second-transition;
      font: {
        family: "Bellefair", serif;
        size: 20px;
      }
      &:hover {
        $shadow: calc(var(--dimension) * 31 / 100);
        box-shadow: 0 0 0 $shadow colors.$main-background;
      }
      @include small {
        --dimension: 200px;
        font-size: 25px;
        letter-spacing: 2px;
      }
      @include medium {
        --dimension: 242px;
        font-size: 32px;
      }
      @include xLarge {
        --dimension: 274px;
        align-self: flex-end;
      }
      @include smallHeight {
        @include small {
          --dimension: 160px;
          font-size: 20px;
          letter-spacing: 2px;
        }
        @include medium {
          --dimension: 164px;
          font-size: 21px;
        }
        @include xLarge {
          --dimension: 180px;
          font-size: 23px;
        }
      }
    }
  }
}
</style>
