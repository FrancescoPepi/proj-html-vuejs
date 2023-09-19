<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  components: {
    AppHeader,
    AppMain,
    AppFooter,
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
</template>

<style lang="scss"></style>
