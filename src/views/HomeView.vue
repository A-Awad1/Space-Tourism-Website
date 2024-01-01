<template>
  <div class="container">
    <section class="home">
      <div>
        <span>so, you want to travel to</span>
        <h1>space</h1>
        <p v-text="siteData.intro"></p>
      </div>
      <button @click="explore">explore</button>
    </section>
  </div>
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

<style lang="scss"></style>
