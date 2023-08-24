import Vue from 'vue'
import './style.css'
import App from './App.vue'
import { todoStore } from "./store/toDoListStore";

new Vue({
    store: todoStore,
    render: (h) => h(App),
  }).$mount("#app");
