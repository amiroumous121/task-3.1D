<template>
  <div>
    <div v-for="message in messages" :key="message.id">
      <p :class="message.sender">{{ message.text }}</p>
    </div>
    <input v-model="userInput" @keyup.enter="sendMessage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
      messages: [
        { id: 1, text: "Hello! How can I assist you?", sender: "bot" },
      ],
    };
  },
  methods: {
    sendMessage() {
      this.messages.push({
        id: Date.now(),
        text: this.userInput,
        sender: "user",
      });
      this.userInput = "";

      setTimeout(() => {
        let botMessage = "I don't understand.";
        if (this.messages.slice(-1)[0].text.toLowerCase().includes("hello")) {
          botMessage = "Hi there!";
        }
        this.messages.push({ id: Date.now(), text: botMessage, sender: "bot" });
      }, 1000);
    },
  },
};
</script>

<style>
.bot {
  color: blue;
}
.user {
  color: green;
}
</style>
