<script>
import AppFooterTop from "./subComponentsFooter/AppFooterTop.vue";
import AppFooterBottom from "./subComponentsFooter/AppFooterBottom.vue";

export default {
  data() {
    return {
      title: "FOOTER",
    };
  },

  components: {
    AppFooterTop,
    AppFooterBottom,
  },
};
</script>

<template>
  <AppFooterTop />
  <AppFooterBottom />
</template>

<style lang="scss" scoped></style>
