<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />

  <div id="pagetop" :class="scY >= 400 ? 'o-100' : 'o-0'" @click="toTop">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4a5568"
      stroke-width="1"
      stroke-linecap="square"
      stroke-linejoin="arcs"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  </div>
</template>

<style lang="scss">
.o-0 {
  opacity: 0%;
  z-index: -2;
}
.o-100 {
  opacity: 100%;
  z-index: 2;
}
#pagetop {
  position: fixed;
  bottom: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
}
</style>
