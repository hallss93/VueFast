import Vue from 'vue'
import 'materialize-css/dist/js/materialize.js'
import 'jquery/dist/jquery.js'
import $ from 'jquery'
import 'jquery-mask-plugin'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'
import Chart from 'chart.js';

import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'

require('./assets/sass/style.scss');
require('./assets/js/libs/amcharts.js');
require('./assets/js/libs/serial.js');
require('./assets/js/libs/pie.js');
require('./assets/js/libs/chalk.js');
require('./assets/js/libs/animate.min.js');
global.jQuery = require('jquery');


let _ = require('lodash');

Vue.use(VueRouter)
Vue.use(Resource)

Vue.$root ={
	loading:false
}

Vue.config.devtools = true;


let routes = [
  	{
		path:'/',
		name:'painel',
		component: Home,
		children:[
			{
				path:'/',
				name: 'inicio',
				component: Dashboard
			}

		]	
	},
	{
		path:'*',//pode ser usado depos para 404
		name: 'inicio.app',
		redirect: '/'
	}
];

let router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

Vue.directive('mask', {
  inserted: function (el) {
    el.focus()
  },
  bind: function(el, binding) {
    $(el).mask(binding.value)
  },
})

var app = new Vue({
  router,
}).$mount('#app')




