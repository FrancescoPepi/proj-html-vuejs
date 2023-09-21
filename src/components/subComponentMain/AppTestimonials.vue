<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      title: "Testimonials",
      slideActive: 0,
    };
  },

  methods: {
    carousel(index) {
      setInterval(() => {
        store.testimonials[index].active = true;
        console.log((store.testimonials[index].active = true));
      }, 2000);
    },
  },

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
        <div class="col-12 my-5">
          <div class="text-center">
            <h1 class="title">
              {{ title }}
            </h1>
            <h4>
              Here's what our happy drivers had to say about our services:
            </h4>
          </div>
        </div>
        <div class="col-10 mx-auto">
          <div
            @mouseout="carousel(index)"
            v-for="(testimonial, index) in store.testimonials"
            class="testimonials-card text-center"
            :class="testimonial.active ? '' : 'd-none'"
          >
            <div class="w-25 mx-auto my-5">
              <img
                class="w-75"
                :src="testimonial.img"
                :alt="testimonial.name"
              />
            </div>
            <div>
              <h4>
                {{ testimonial.text }}
              </h4>
            </div>
            <div class="my-5">
              <h4 class="fw-bold">
                {{ testimonial.name }}
              </h4>
            </div>
          </div>
        </div>
        <div class="d-flex pointer">
          <div class="p-1" v-for="testimonial in store.testimonials">
            <font-awesome-icon
              v-if="testimonial.active"
              icon="fa-solid fa-circle"
            />

            <font-awesome-icon v-else icon="fa-regular fa-circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-image: url("/img/testimonial-background.jpg");
  background-size: cover;
  background-position: center;
  height: 900px;
  color: #929aa3;
  .pointer {
    justify-content: center;
    transition: all 0.3s ease-in;
    position: relative;
    bottom: 50px;
  }
  .col-10 {
    height: 550px;
    position: relative;
  }

  .testimonials-card {
    position: absolute;
  }
}
</style>
