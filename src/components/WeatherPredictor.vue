<template>
  <div class="weather-predictor">
    <h2>Weather Predictor</h2>
    <input
      v-model="city"
      placeholder="Enter city"
      @keyup.enter="predictWeather"
    />
    <button @click="predictWeather">Predict</button>
    <div v-if="prediction">
      The weather in {{ city }} will be {{ prediction }}.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      prediction: null,
    };
  },
  methods: {
    async predictWeather() {
      // Simulating an API call to a machine learning model
      const mockApiCall = new Promise((resolve) => {
        setTimeout(() => {
          resolve("sunny"); // Mock prediction
        }, 1000);
      });

      this.prediction = await mockApiCall;
    },
  },
};
</script>

<style>
.weather-predictor {
  /* Add your styles here */
}
</style>
