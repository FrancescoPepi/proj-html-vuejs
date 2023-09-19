<script>
// import HeaderComponent from "./components/Header.vue";
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
      title: "HEADER",
      img: "/img/avada-drivers-logo-1x.png",
      links: [
        {
          id: 1,
          name: "HOME",
          url: "#",
          active: true,
          new: false,
        },
        {
          id: 2,
          name: "ABOUT",
          url: "#",
          active: false,
          new: false,
        },
        {
          id: 3,
          name: "PRICES",
          url: "#",
          active: false,
          new: false,
        },
        {
          id: 4,
          name: "COURSES",
          url: "#",
          active: false,
          new: true,
        },
        {
          id: 5,
          name: "LOCATIONS",
          url: "#",
          active: false,
          new: false,
        },
        {
          id: 6,
          name: "BLOG",
          url: "#",
          active: false,
          new: false,
        },
      ],
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
  <div class="bg-top">
    <div class="container">
      <div class="header-top">
        <div>We have a 95% Successful Pass Rate!</div>
        <div>Give us a call to book your tuition!{{ store.phoneNumber }}</div>
      </div>
    </div>
  </div>
  <div class="bg-bottom">
    <div class="container">
      <div class="header-bottom">
        <section>
          <img :src="img" alt="Logo" />
        </section>
        <section class="d-flex">
          <ul class="d-flex">
            <li class="p-2" v-for="link in links" :key="link.id">
              <a :class="link.active ? 'active' : ''" :href="link.url">
                {{ link.name }}
              </a>
              <span v-if="link.new" class="badge new">NEW</span>
            </li>
          </ul>
          <button type="button" class="btn btn-primary">BOOK NOW</button>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// MIXINS
@use "../style/subStyle/mixins.scss" as *;
@use "../style/subStyle/variable.scss" as *;

.bg-top {
  background-color: #494c4e;
}
.bg-bottom {
  background-color: #000000;
  opacity: 40%;
}
.container {
  .header-top {
    color: #929aa3;
    height: 50px;
    @include flex();
  }
  .header-bottom {
    color: #f6f6f6;
    height: 100px;
    @include flex();
  }
  .header-bottom {
    @include flex();
  }
  .new {
    margin-left: 3px;
    background-color: #7abc64;
  }
  .active {
    color: #7abc64;
    &::after {
    }
  }
}
</style>
