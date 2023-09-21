<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      title: "titolo",
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
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col">
          <img :src="store.logo" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            temporibus, inventore eius modi itaque esse rem? Recusandae quos
            obcaecati dicta.
          </p>
        </div>
        <div v-for="(section, index) in store.footer" class="col">
          <div>
            <h4>{{ section.title }}</h4>
          </div>
          <ul v-for="subSection in section.links" class="p-0 d-flex">
            <li><font-awesome-icon :icon="subSection.icon" /></li>
            <li class="ps-4">{{ subSection.text }}</li>
          </ul>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  color: white;
  .col:nth-of-type(2) li {
    color: #929aa3;
  }
  .col:nth-of-type(3) li {
    color: #7abc64;
  }
}
</style>
