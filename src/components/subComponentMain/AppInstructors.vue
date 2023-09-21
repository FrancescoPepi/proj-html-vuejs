<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      title: "Instructors",
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
        <div class="paragraph d-flex">
          <div class="col-8">
            <h1 class="title mb-4">Your Instructors</h1>
            <h4 class="me-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              soluta qui atque necessitatibus quis quia.
            </h4>
          </div>
          <div class="col-4">
            <button class="btn btn-green">MORE ABOUT US</button>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div v-for="instructor in store.instructorsCards" class="col px-1">
              <div class="card-info p-5">
                <img class="w-100" :src="instructor.img" alt="" />
                <h2 class="mt-5 fw-bold">{{ instructor.name }}</h2>
                <p>
                  <span class="px-2" v-for="social in instructor.socials">{{
                    social
                  }}</span>
                </p>
                <p>{{ instructor.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: white;
  .paragraph {
    .col-4 {
      align-self: center;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
