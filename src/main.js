import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/reset.css';
import { Form, Input, Select, Button } from 'ant-design-vue';

const dependencyList = [Form, Input, Select, Button];

const handleUseDependency = (App, dependencyList) => {
  dependencyList.forEach((item) => {
    App.use(item);
  });
};

handleUseDependency(Vue, dependencyList);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
