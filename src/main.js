import Vue from "vue";
import App from "./App.vue";
import GoogleMap from "./GoogleMap.vue"; // Import the GoogleMap component
import DataVisualization from "./DataVisualization.vue"; // Import the DataVisualization component
import Chatbot from "./Chatbot.vue"; // Import the Chatbot component

Vue.component("google-map", GoogleMap); // Register the GoogleMap component
Vue.component("data-visualization", DataVisualization); // Register the DataVisualization component
Vue.component("chatbot", Chatbot); // Register the Chatbot component

new Vue({
  render: (h) => h(App),
}).$mount("#app");
