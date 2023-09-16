<template>
  <form>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="email" v-model="email" placeholder="Email" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      username: "",
      email: "",
    };
  },
};
</script>

<style scoped>
/* Add your CSS here */
</style>
