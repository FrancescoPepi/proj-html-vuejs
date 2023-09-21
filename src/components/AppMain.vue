<script>
import AppPromoter from "./subComponentMain/AppPromoter.vue";
import AppCall from "./subComponentMain/AppCall.vue";
import AppCourses from "./subComponentMain/AppCourses.vue";
import AppInstructors from "./subComponentMain/AppInstructors.vue";
import AppTestimonials from "./subComponentMain/AppTestimonials.vue";
import AppNews from "./subComponentMain/AppNews.vue";

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
    AppTestimonials,
    AppNews,
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
  <AppTestimonials />
  <AppNews />
</template>

<style lang="scss" scoped></style>
