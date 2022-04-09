Vue.createApp({
  data() {
    return {
      current: new Date(),
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.current = new Date();
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
}).mount("#app");
