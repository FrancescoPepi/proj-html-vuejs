import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.mount("#app");

// ADD BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

// ADD CIRCLE
import "vue3-circle-progress/dist/circle-progress.css";

// ADD SCSS
import "./style/general.scss";
import "./style/subStyle/variable.scss";

// FONTAWSOME
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faStar, faSpinner } from "@fortawesome/free-solid-svg-icons";
// library.add(faStar, faSpinner);
// app.component("font-awesome-icon", FontAwesomeIcon);
