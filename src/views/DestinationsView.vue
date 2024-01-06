<template>
  <section class="destinations">
    <header>
      <PageNumberSpan />
      <h2>pick your destination</h2>
    </header>
    <main>
      <section>
        <ul>
          <li
            v-for="dest in allDest"
            :key="dest"
            v-text="dest"
            :class="['option-hover', { active: currentDestName === dest }]"
            @click="currentDestName = dest"
          ></li>
        </ul>
        <h3 v-text="currentDest.name"></h3>
        <p v-text="currentDest.description"></p>
        <hr />
        <div>
          <div>
            <span>avg. distance</span>
            <span v-text="currentDest.distance"></span>
          </div>
          <div>
            <span>est. travel time</span>
            <span v-text="currentDest.travel"></span>
          </div>
        </div>
      </section>
      <img :src="currentImg" />
    </main>
  </section>
</template>

<script>
import PageNumberSpan from "@/components/PageNumberSpan";
export default {
  name: "DestinationsView",
  inject: {
    siteData: "siteData",
  },
  data() {
    return {
      currentDestName: this.siteData.destinations.map((e) => e.name)[0],
    };
  },
  computed: {
    allDest: function () {
      return this.siteData.destinations.map((e) => e.name);
    },
    currentDest: function () {
      return this.siteData.destinations.filter(
        (e) => e.name === this.currentDestName
      )[0];
    },
    currentImg: function () {
      return require(`../assets/destinations/image-${this.currentDestName.toLowerCase()}.png`);
    },
  },
  components: {
    PageNumberSpan,
  },
};
</script>
<style lang="scss">
section.destinations {
  text-transform: uppercase;
  @include medium {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  @include xLarge {
    justify-content: flex-start;
  }
  @include smallHeight {
    @include xLarge {
      justify-content: space-evenly;
    }
  }
  > {
    header {
      @extend %center-flex;
      gap: 18px;
      margin: 24px 0 32px;
      font-size: 16px;
      @include small {
        margin: 32px 0;
        font-size: 18px;
      }
      @include medium {
        justify-content: flex-start;
        gap: 19px;
        margin: 0 40px;
        font-size: 20px;
      }
      @include large {
        margin: 0 100px;
      }
      @include xLarge {
        gap: 28px;
        margin: 76px 20px 64px 167px;
        font-size: 28px;
      }
      @include mobileSmallHeight {
        margin: 15px 0;
      }
      @include smallHeight {
        @include small {
          margin: 22px 0;
          font-size: 16px;
        }
        @include medium {
          margin: 0 40px;
          font-size: 20px;
        }
        @include large {
          margin: 0 100px;
        }
        @include xLarge {
          margin: 0 130px;
          font-size: 22px;
        }
      }
      h2 {
        font: {
          size: inherit;
          weight: normal;
        }
        letter-spacing: 2.7px;
        line-height: normal;
        @include small {
          letter-spacing: 3px;
        }
        @include medium {
          letter-spacing: 3.375px;
        }
        @include xLarge {
          letter-spacing: 4.725px;
        }
        @include smallHeight {
          @include small {
            letter-spacing: 2.5px;
          }
          @include medium {
            letter-spacing: 3px;
          }
          @include xLarge {
            letter-spacing: 4px;
          }
        }
      }
    }
    main {
      @extend %column-flex;
      @include xLarge {
        flex-direction: row;
        justify-content: space-evenly;
        padding-left: 70px;
      }
      > section {
        @extend %column-flex;
        padding: 24px {
          top: 0;
        }
        @include small {
          padding: 0 97px 12px;
        }
        @include xLarge {
          padding: 0;
          flex-basis: 445px;
          align-items: flex-start;
        }
        @include mobileSmallHeight {
          padding-top: 12px;
        }
        @include smallHeight {
          @include small {
            padding: 0 50px 12px;
          }
          @include medium {
            padding: 0 97px 12px;
          }
          @include xLarge {
            padding: 0;
            flex-basis: 350px;
            align-items: flex-start;
          }
        }
        > {
          ul {
            display: flex;
            gap: 27px;
            margin: 26px 0 20px;
            @include medium {
              margin: 53px 0 32px;
            }
            @include xLarge {
              gap: 36px;
              margin: 0 {
                bottom: 37px;
              }
            }
            @include mobileSmallHeight {
              margin: 4px 0 6px;
            }
            @include smallHeight {
              @include small {
                margin: 15px 0;
              }
              @include medium {
                margin: 25px 0;
              }
              @include xLarge {
                margin: 0 {
                  bottom: 18px;
                }
              }
            }
            li {
              font-size: 14px;
              letter-spacing: 2.362px;
              padding-bottom: 11px;
              cursor: pointer;
              position: relative;
              color: colors.$second-text;
              line-height: normal;
              user-select: none;
              @include small {
                font-size: 16px;
              }
              @include medium {
                letter-spacing: 2.7px;
                padding-bottom: 15px;
              }
              @include smallHeight {
                @include small {
                  font-size: 14px;
                }
                @include medium {
                  font-size: 16px;
                }
              }
            }
          }
          h3 {
            font: {
              family: "Bellefair", serif;
              weight: normal;
              size: 56px;
            }
            @include small {
              font-size: 65px;
            }
            @include medium {
              font-size: 80px;
            }
            @include xLarge {
              font-size: 100px;
              line-height: normal;
            }
            @include smallHeight {
              @include small {
                font-size: 56px;
              }
              @include xLarge {
                font-size: 80px;
              }
            }
          }
          p {
            margin: 1px;
            color: colors.$second-text;
            line-height: 166.667%;
            text: {
              transform: none;
              align: center;
            }
            font: {
              family: "Barlow", sans-serif;
              size: 15px;
            }
            @include small {
              font-size: 16px;
            }
            @include medium {
              margin-top: 8px;
              max-width: 760px;
              line-height: 3.5ex;
              height: calc(3.5ex * 3);
            }
            @include large {
              height: auto;
            }
            @include xLarge {
              text-align: start;
              font-size: 18px;
              margin-top: 14px;
              line-height: 177.778%;
            }
            @include smallHeight {
              @include small {
                font-size: 15px;
              }
              @include medium {
                font-size: 16px;
              }
              @include xLarge {
                line-height: 3.5ex;
                height: calc(3.5ex * 4 + 15px);
              }
            }
          }
          hr {
            background-color: #383b4b;
            width: 100%;
            height: 1px;
            border: none;
            margin: 32px 0;
            @include medium {
              margin: 49px 0 28px;
            }
            @include xLarge {
              margin-top: 54px;
            }
            @include mobileSmallHeight {
              margin: 12px;
            }
            @include smallHeight {
              @include small {
                margin: 15px 0;
              }
              @include xLarge {
                margin: 25px 0;
              }
            }
          }
          div {
            @include medium {
              width: 100%;
              display: flex;
              justify-content: space-evenly;
            }
            > div {
              @extend %column-flex;
              gap: 12px;
              @include xLarge {
                flex-basis: 50%;
                align-items: flex-start;
              }
              @include mobileSmallHeight {
                gap: 5px;
              }
              &:first-of-type {
                margin-bottom: 32px;
                @include medium {
                  margin-bottom: 0;
                }
                @include mobileSmallHeight {
                  margin-bottom: 12px;
                }
                @include smallHeight {
                  @include small {
                    margin-bottom: 22px;
                  }
                  @include medium {
                    margin-bottom: 0;
                  }
                }
              }
              span {
                text-align: center;
                line-height: normal;
              }
              span:first-child {
                color: colors.$second-text;
                letter-spacing: 2.362px;
                font-size: 14px;
              }
              span:last-child {
                font: {
                  size: 28px;
                  family: "Bellefair", serif;
                }
              }
            }
          }
        }
      }
      img {
        width: 170px;
        order: -1;
        @include small {
          width: 200px;
        }
        @include medium {
          width: 300px;
        }
        @include xLarge {
          width: 445px;
          align-self: flex-end;
        }
        @include smallHeight {
          @include small {
            width: 170px;
          }
          @include medium {
            width: 200px;
          }
          @include large {
            width: 225px;
          }
          @include xLarge {
            width: 350px;
          }
        }
      }
    }
  }
}
</style>
