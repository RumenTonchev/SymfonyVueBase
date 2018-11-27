import Vue from "vue"

import App from "./Components/App"

Vue.config.devtools = true;
Vue.config.productionTip = true;

let app_component = document.getElementById('app');
if (app_component) {
    new Vue({
        render: h => h(App)
    }).$mount('#app')
}