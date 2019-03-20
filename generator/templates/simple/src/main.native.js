---
extend: '@vue/cli-service/generator/template/src/main.js'
replace:
  - !!js/regexp /import Vue from 'vue'/
  - !!js/regexp /import App from './App.vue'/
  - !!js/regexp /Vue.config.productionTip = false/
  - !!js/regexp /h => h\(App\),/
  - !!js/regexp /}\)\.\$mount\('#app'\)/
---

<%# REPLACE %>
import Vue from 'nativescript-vue';
<%# END_REPLACE %>

<%# REPLACE %>
import Navigator from 'nativescript-vue-navigator'

import App from './App.vue';
import { options } from './router';

const routes = options.routes.reduce((data, route) => {
  data[route.name] = {
    component: route.component
  }
  return data
}, {});

Vue.use(Navigator, { routes });
<%# END_REPLACE %>

<%# REPLACE %>
// Set the following to `true` to hide the logs created by nativescript-vue
Vue.config.silent = false;
// Set the following to `false` to not colorize the logs created by nativescript-vue
// disabled in template due to typing issue for Typescript projects....NEEDS TO BE FIXED
// Vue.config.debug = true;
<%# END_REPLACE %>

<%# REPLACE %>
(h) => h(App),
<%# END_REPLACE %>

<%# REPLACE %>
}).$start();
<%# END_REPLACE %>