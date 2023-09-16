<template>
  <div>
    <button @click="emitCustomEvent">Click Me</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitCustomEvent() {
      this.$emit("custom-event", "Data from child component");
    },
  },
};
</script>
