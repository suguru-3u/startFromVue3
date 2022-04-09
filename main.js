const app = Vue.createApp({
  data() {
    return {
      message: "Hello!!",
      items: ["Hello", "こんにちわ", "ボンジュール"],
      active: true,
      styleObject: {
        color: "red",
        backgroundColor: "lightgray",
      },
      monster: [
        { id: 1, name: "スライム", hp: 300 },
        { id: 2, name: "ゴブリン", hp: 300 },
        { id: 3, name: "ドラゴン", hp: 300 },
      ],
      name: "",
    };
  },
  created: function () {
    alert("Yes");
  },
  methods: {
    handleClick: function () {
      alert("Hello");
      this.active = !this.active;
    },
    addMonster: function () {
      const maxId = this.monster.reduce(function (a, b) {
        return a.id > b.id ? a.id : b.id;
      }, 0);
      this.monster.push({
        id: maxId + 1,
        name: this.name,
        hp: Math.floor(Math.random() * 1000),
      });
    },
    removeMonster: function (index) {
      this.monster.splice(index, 1);
    },
    attcakMonster: function (index) {
      this.monster[index].hp -= 10;
    },
  },
});

app.mount("#app");
