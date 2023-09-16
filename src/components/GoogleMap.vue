<template>
  <div id="map"></div>
</template>

<script>
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    },
  },
};
</script>

<style>
#map {
  height: 400px;
  width: 100%;
}
</style>
