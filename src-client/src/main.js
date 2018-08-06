import Vue from 'vue'
import App from './App.vue'
import Test1 from './Test1.vue'
import TestButton from './components/Button.vue'
import InputField from './components/InputField.vue'
import IncludeParts from './components/IncludeParts.vue'
import gcChart from './charts/gcChart.vue'
import VueCharts from 'vue-charts'
import SocketTest from './components/SocketTest.vue';
import Highcharts from 'highcharts';
import HighchartsTest from './charts/HighchartsTest.vue';
import HChart from './charts/HChart.vue';

// "HelloVue" is the appName that needs to be used in backend JS
window.Vue = Vue;
window.HelloVue = App;
window.Test1 = Test1;
window.TestButton = TestButton;
window.InputField = InputField;
window.IncludeParts = IncludeParts;
window.GcChart = gcChart;
window.VueCharts = VueCharts;
window.SocketTest = SocketTest;
window.Highcharts = Highcharts;
window.HChart = HChart;
window.HighchartsTest = HighchartsTest;
