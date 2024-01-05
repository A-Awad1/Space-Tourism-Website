<template>
  <span class="pageNumber" v-text="pageNumber"></span>
</template>

<script>
export default {
  name: "PageNumberSpan",
  computed: {
    pageNumber: function () {
      return `0 ${[...document.querySelectorAll("#app>nav>ul>li")].findIndex(
        (e) => e.classList.contains("active")
      )}
      `;
    },
  },
};
</script>

<style lang="scss">
span.pageNumber {
  color: rgba(colors.$main-text, 0.25);
  font: {
    weight: 700;
    size: inherit;
  }
}
</style>
