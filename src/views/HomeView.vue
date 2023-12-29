<template>
  <section></section>
</template>

<style lang="scss">
#app {
  background : {
    image: url(../assets/home/background-home-mobile.jpg);
    repeat: no-repeat;
    size: cover;
  }
  @include medium {
    background-image: url(../assets/home/background-home-tablet.jpg);
  }
  @include large {
    background-image: url(../assets/home/background-home-desktop.jpg);
  }
}
</style>
