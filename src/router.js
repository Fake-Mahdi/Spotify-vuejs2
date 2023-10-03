import Vue from 'vue';
import Router from 'vue-router';
import HomeSection from './views/HomeSection.vue';
import ConnecterSection from './views/ConnecterSection.vue';
import SignSection from './views/SignSection.vue';



Vue.use(Router);

const routes = [
    { path: '/', 
    name: 'HomeSection',
    component: HomeSection
 },
 { path: '/ConnecterSection', 
    name: 'ConnecterSection',
    component: ConnecterSection
 },
 { path: '/SignSection', 
    name: 'SignSection',
    component: SignSection
 },

];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;