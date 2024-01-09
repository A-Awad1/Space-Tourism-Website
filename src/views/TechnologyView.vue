<template>
  <section class="technology">
    <header>
      <PageNumberSpan />
      <h2>space launch 101</h2>
    </header>
    <main>
      <div class="img">
        <img :src="currentImg" alt="technology-img" />
      </div>
      <ul>
        <li
          v-for="tech in allTech"
          :key="tech"
          :class="{ active: currentTechName === tech }"
          @click="currentTechName = tech"
        ></li>
      </ul>
      <div class="info">
        <span>the terminology…</span>
        <h3 v-text="currentName"></h3>
        <p v-html="currentDesc"></p>
      </div>
    </main>
  </section>
</template>

<script>
import PageNumberSpan from "@/components/PageNumberSpan";
export default {
  name: "TechnologyView",
  inject: {
    siteData: "siteData",
  },
  data() {
    return {
      currentTechName: this.siteData.technology.map((e) => e.name)[0],
    };
  },
  computed: {
    allTech: function () {
      return this.siteData.technology.map((e) => e.name);
    },
    currentTech: function () {
      return this.siteData.technology.filter(
        (e) => e.name === this.currentTechName
      )[0];
    },
    currentImg: function () {
      return require(`../assets/technology/image-${this.currentTechName
        .replace(" ", "-")
        .toLowerCase()}-portrait.jpg`);
      // .toLowerCase()}-landscape.jpg`);
    },
    currentName: function () {
      return this.currentTech.name;
    },
    currentDesc: function () {
      return this.currentTech.description.replaceAll("-", "&#8209;");
    },
  },
  components: {
    PageNumberSpan,
  },
};
</script>
<style lang="scss">
section.technology {
  text-transform: uppercase;
  @include smallHeight {
    @include xLarge {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
  > {
    header {
      @extend %center-flex;
      gap: 16px;
      margin: 24px 0 32px;
      font-size: 16px;
      @include small {
        justify-content: flex-start;
        margin: 40px 10px 40px 39px;
        font-size: 18px;
      }
      @include medium {
        margin-bottom: 60px;
        font-size: 20px;
      }
      @include xLarge {
        gap: 32px;
        margin: 76px 10px 26px 166px;
        font-size: 28px;
      }
      @include smallHeight {
        @include small {
          margin: 25px {
            right: 10px;
          }
        }
        @include medium {
          font-size: 20px;
        }
        @include xLarge {
          font-size: 22px;
          margin: 65px 10px 0 130px;
        }
      }
      h2 {
        letter-spacing: 2.7px;
        font: {
          size: inherit;
          weight: normal;
        }
        @include small {
          letter-spacing: 3px;
        }
        @include medium {
          letter-spacing: 3.375px;
        }
        @include xLarge {
          letter-spacing: 4.725px;
        }
      }
    }
    main {
      @extend %column-flex;
      @include xLarge {
        padding-left: 165px;
        flex-direction: row;
        gap: 80px;
        justify-content: center;
      }
      @include smallHeight {
        @include xLarge {
          flex: 1;
        }
      }
      > {
        div.img {
          @include xLarge {
            order: 1;
            margin-left: 50px;
            max-height: 527px;
          }
          @include smallHeight {
            @include xLarge {
              height: 100%;
              max-height: 58.5vh;
              display: flex;
              align-items: center;
            }
          }
          img {
            max-width: 100%;
            @include medium {
              max-height: 30.3vh;
              min-height: 250px;
            }
            @include xLarge {
              min-height: none;
              max-height: none;
            }
            @include smallHeight {
              @include small {
                max-height: 250px;
              }
              @include xLarge {
                min-height: none;
                max-height: 100%;
              }
            }
          }
        }
        ul {
          display: flex;
          gap: 16px;
          margin: 34px 0 26px;
          @include medium {
            margin: 5.5vh 0 4.2vh;
          }
          @include xLarge {
            gap: 32px;
            flex-direction: column;
            margin: 0;
            padding: 50px 0;
          }
          @include smallHeight {
            @include medium {
              margin: 15px 0;
            }
            @include xLarge {
              margin: 0;
            }
          }
          li {
            counter-increment: vehicle;
            aspect-ratio: 1/1;
            width: 40px;
            border-radius: 50%;
            font-family: "Bellefair", serif;
            cursor: pointer;
            --border-opacity: 0.25;
            border: 1px solid rgba(colors.$main-text, var(--border-opacity));
            transition: $main-transition;
            @extend %center-flex;
            @include small {
              width: 50px;
              font-size: 20px;
            }
            @include medium {
              width: 60px;
              font-size: 24px;
            }
            @include xLarge {
              width: 80px;
              font-size: 32px;
            }
            @include smallHeight {
              @include medium {
                width: 55px;
                font-size: 22px;
              }
              @include xLarge {
                width: 70px;
                font-size: 30px;
              }
            }
            &::before {
              content: counter(vehicle);
            }
            &.active {
              color: colors.$third-text;
              background-color: colors.$main-text;
            }
            &:not(.active):hover {
              --border-opacity: 1;
            }
          }
        }
        div.info {
          @extend %column-flex;
          @include xLarge {
            align-items: flex-start;
            justify-self: flex-start;
            width: 470px;
            padding: 50px 0;
          }
          > {
            span {
              color: colors.$second-text;
              font-size: 14px;
              letter-spacing: 2.362px;
              @include small {
                font-size: 16px;
                letter-spacing: 2.7px;
              }
            }
            h3 {
              margin: 9px 0 16px;
              white-space: nowrap;
              font: {
                family: "Bellefair", serif;
                size: 24px;
                weight: normal;
              }
              @include small {
                margin-top: 16px;
                font-size: 30px;
              }
              @include medium {
                font-size: 40px;
              }
              @include xLarge {
                margin: 11px 0 17px;
                font-size: 56px;
              }
              @include smallHeight {
                @include medium {
                  margin: 9px 0;
                }
                @include xLarge {
                  margin: 11px 0;
                  font-size: 50px;
                }
              }
            }
            p {
              text-transform: none;
              color: colors.$second-text;
              text-align: center;
              line-height: 25px;
              margin: 0 24.2px 10px;
              font: {
                family: "Barlow", sans-serif;
                size: 15px;
              }
              @include medium {
                margin-bottom: 0;
                font-size: 16px;
                line-height: 28px;
                max-width: 59%;
              }
              @include xLarge {
                text-align: start;
                margin: 0;
                font-size: 18px;
                line-height: 3.5ex;
                height: calc(3.5ex * 6);
                max-width: 444px;
              }
              @include smallHeight {
                @include small {
                  max-width: 619px;
                }
                @include xLarge {
                  max-width: 444px;
                  font-size: 17px;
                  line-height: 3ex;
                  height: calc(3ex * 6);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
