<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      title: "COURSES",
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  // components: {
  //	MyComponent,
  // },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="bg py-5">
    <div class="container">
      <div class="row">
        <div class="div">
          <h1>{{ title.toUpperCase() }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;
  // background-color: white;
  &::before {
    content: "";
    // image triangolare
    clip-path: polygon(0 0, 100% 0, 50% 99%, 0 0);
    height: 100px;
    background-image: url("/img/promise-background.jpg");
    background-size: cover;
    background-position: bottom;
    display: block;
  }
}
</style>
