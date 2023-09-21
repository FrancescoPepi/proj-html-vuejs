<script>
export default {
  data() {
    return {
      title: "titolo",
      socials: ["F", "X", "Y", "I"],
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
        <div class="footer-bottom">
          <div class="copyright">
            Copyright 2012 - 2020 | Acada Thene by <a href="#">ThemeFusion</a> |
            All Rights Reserved | Powered by <a href="#">WordPress</a>
          </div>
          <div>
            <span v-for="social in socials" class="px-3">{{ social }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// MIXINS
@use "../../style/subStyle/mixins.scss" as *;
.bg {
  height: 150px;
  background-color: #1c1d1e;
  color: #929aa3;
  font-size: 0.7rem;
  .container {
    line-height: 150px;
  }
  .footer-bottom {
    @include flex();
  }
  // @include flex();
  .copyright {
    a {
      text-decoration: none;
      cursor: pointer;
      color: #7abc64;
    }
  }
}
</style>
