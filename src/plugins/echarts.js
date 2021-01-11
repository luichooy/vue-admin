import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";
// 引入需要的 echarts的交互组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/visualMap";
import Vue from "vue";
import ECharts from "vue-echarts/components/ECharts.vue";
Vue.component("chart", ECharts);
