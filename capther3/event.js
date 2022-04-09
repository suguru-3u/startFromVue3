// 双方向データバインディング
// Vue.createApp({
//   data() {
//     return {
//       message: "",
//       //   path: "./image/aa.jpg",
//       myName: "匿名",
//     };
//   },
//   methods: {
//     onclick(e, message) {
//       this.message = new Date().toLocaleString();
//       console.log(e);
//       console.log(message);
//     },
//     // onerror() {
//     //   this.path = "https//www.web-deli.com/image/linkbanner_l.gif";
//     // },
//   },
// }).mount("#app");

// 制御関連のディレクティブ

Vue.createApp({
  data() {
    return {
      show: true,
    };
  },
}).mount("#app");
