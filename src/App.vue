<template>
  <div id="app">
    <Header />
    <google-map v-if="showGoogleMap"></google-map>
    <data-visualization v-if="showDataVisualization"></data-visualization>
    <chatbot v-if="showChatbot"></chatbot>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import GoogleMap from "./components/GoogleMap.vue";
import DataVisualization from "./components/DataVisualization.vue";
import Chatbot from "./components/Chatbot.vue";

export default {
  components: {
    Header,
    Footer,
    GoogleMap,
    DataVisualization,
    Chatbot,
  },
  data() {
    return {
      showGoogleMap: false, // set these based on your logic
      showDataVisualization: false,
      showChatbot: false,
    };
  },
};
</script>

<style>
/* Add your global CSS here */
</style>
