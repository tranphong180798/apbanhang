import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("formatMoney", function(x, sign) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sign) + " đ";
});

Vue.mixin({
  data: function() {
    return {
      sign: ","
    };
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
