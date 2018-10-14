// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VeeValidate from "vee-validate";
import MyForm from "./components/common/MyForm";
import MyFormGroup from "./components/common/MyFormGroup";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VeeValidate, {
  inject: false,
  errorBagName: "vvErrors",
  fieldsBagName: "vvFields"
});

Vue.component("my-form", MyForm);
Vue.component("my-form-group", MyFormGroup);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
