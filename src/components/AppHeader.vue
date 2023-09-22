<script>
import { store } from "../data/store.js";
import AppHero from "./subComponentHeader/AppHero.vue";

export default {
  data() {
    return {
      store,
      title: "HEADER",
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
  methods: {
    active(index) {
      for (const link in this.links) {
        link == index
          ? (this.links[link].active = true)
          : (this.links[link].active = false);
      }
    },
  },
  components: {
    AppHero,
  },
};
</script>

<template>
  <header>
    <div class="bg-top">
      <div class="container">
        <div class="row">
          <div class="header-top">
            <div>We have a 95% Successful Pass Rate!</div>
            <div>
              <font-awesome-icon icon="fa-solid fa-phone" flip="horizontal" />
              Give us a call to book your tuition! {{ store.phoneNumber }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-bottom">
      <div class="container">
        <div class="row">
          <div class="header-bottom">
            <section>
              <img :src="store.logo" alt="Logo" />
            </section>
            <section class="links">
              <ul>
                <li
                  class="px-3"
                  v-for="(link, index) in links"
                  :key="link.id"
                  @click="active(index)"
                  :class="link.active ? 'active' : ''"
                >
                  <a :href="link.url">
                    {{ link.name }}
                  </a>
                  <span v-if="link.new" class="badge new">NEW</span>
                </li>
              </ul>
              <button type="button" class="btn btn-green">BOOK NOW</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  </header>

  <AppHero />
</template>

<style lang="scss" scoped>
// MIXINS
@use "../style/subStyle/mixins.scss" as *;
// VARIABLE
@use "../style/subStyle/variable.scss" as *;

header {
  font-weight: 900;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
}
.bg-top {
  background-color: #353637;
  font-size: 0.6rem;
}
.bg-bottom {
  background-color: #494c4ea2;
}

.header-top {
  color: #929aa3;
  height: 50px;
  @include flex();
}
.header-bottom {
  color: #f6f6f6;
  height: 100px;
  @include flex();
  .links {
    @include flex();
    & ul {
      @include flex();
      margin: 0;
    }
  }
}

.new {
  margin-left: 3px;
  background-color: #7abc64;
}
.active {
  & a {
    color: #7abc64;
  }
  &::after {
    content: "";
    box-shadow: 0 4px 0px 1px #7abc64;
    width: 100%;
    display: block;
  }
}
</style>
