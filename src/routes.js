import Component1 from './components/comp/Component1.vue';
import Component2 from './components/comp/Component2.vue';
import Component4 from './components/comp/Component4.vue';
import Component5 from './components/comp/Component5.vue';
import Component6 from './components/comp/Component6.vue';
import Component7 from './components/comp/Component7.vue';
import Component8 from './components/comp/Component8.vue';
import Component9 from './components/comp/Component9.vue';

export const routes = [
      {path: '/Component1', component: Component1, name: 'Component1'},
      {path: '/Component2', component: Component2},
      {path: '/Component4', component: Component4},
      {path: '/Component5', component: Component5, name: 'Component5'},
      {path: '/Component6', component: Component6, name: 'Component6'},
      {path: '/Component7', component: Component7, name: 'Component7'},
      {path: '/Component8', component: Component8, name: 'Component8'},
      {path: '/Component9', component: Component9, name: 'Component9'},
];