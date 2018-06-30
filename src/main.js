// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';
import Comments from './components/Comments.vue';
import Comments_details from './components/Comments_Details.vue';
import Comments_Update from './components/Comments_Update.vue';
import VueParticles from 'vue-particles'; /// particles
import Vue2Filters from 'vue2-filters'; /// filter
import 'vue2-toast/lib/toast.css'; /// toast
import Toast from 'vue2-toast'; /// toast
import VueSweetalert2 from 'vue-sweetalert2'; /// alert

Vue.config.productionTip = false;

Vue.use(VueParticles);
Vue.use(vueResource);
Vue.use(VueRouter);
Vue.use(Vue2Filters);
Vue.use(Toast);
Vue.use(VueSweetalert2);

//////////////////////////////////////////////////
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home', component: Home },
    { path: '/comments', component: Comments },
    { path: '/comments_update/:id', component: Comments_Update },
    { path: '/comments-details/:id', component: Comments_details },
    { path: '/about', component: About }
  ]
});
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // components: { App },
  // template: '<App/>'
  router,
  components: {
    Navbar,
    Footer
  },
  template: ` 
  <div id="app">
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
  </div>`
}).$mount('#app');
