<script>
import AppPromoter from "./subComponentMain/AppPromoter.vue";
import AppCall from "./subComponentMain/AppCall.vue";
import AppCourses from "./subComponentMain/AppCourses.vue";
import AppInstructors from "./subComponentMain/AppInstructors.vue";

export default {
  data() {
    return {
      title: "MAIN",
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  components: {
    AppPromoter,
    AppCall,
    AppCourses,
    AppInstructors,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <!-- <h1>{{ title }}</h1> -->
  <AppPromoter />
  <AppCall />
  <AppCourses />
  <AppInstructors />
</template>

<style lang="scss" scoped></style>
