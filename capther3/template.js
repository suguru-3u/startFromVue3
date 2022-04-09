// Vue インスタンス
Vue.createApp({
  // ↓データオブジェクト
  data: function () {
    return {
      message: "皆さん、こんにちは！",
      url: "https://google.com",
      email: "Y-Suzuki@example.com",
    };
  },
  computed: {
    localEmail: function () {
      return this.email.split("@")[0].toLowerCase();
    },
    randomc: function () {
      return Math.random();
    },
  },
  methods: {
    // localEmail: function () {
    //   return this.email.split("@")[0].toLowerCase();
    // },
    randomm: function () {
      return Math.random();
    },
  },
}).mount("#app");
