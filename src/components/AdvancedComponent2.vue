<template>
  <div>
    <input type="number" v-model="number" />
    <p>Square of the number: {{ squareOfNumber }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    squareOfNumber() {
      return this.number * this.number;
    },
  },
};
</script>
