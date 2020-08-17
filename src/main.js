// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts/lib/echarts';
// // 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/funnel';
import 'echarts/lib/chart/custom';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/sankey';
// 引入提示框和标题组件
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/visualMap';
import ElementUI from 'element-ui';
import XyyYui from '@xyy-supply/xyy-yui';
import '@xyy-supply/xyy-yui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
window.echarts = echarts;
Vue.use(ElementUI);
Vue.use(XyyYui);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
