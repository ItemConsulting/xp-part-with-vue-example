<template>
  <div class="wrap">
    <h1>Google charts - {{enonicStuff.thing}}</h1>
        <GChart
        type="ColumnChart"
        :data="chartData"
        :options="chartOptions"
      />
      <h1>Google charts - Line Chart</h1>

      <GChart
      type="LineChart"
      :data="chartData"
      :options="chartOptions"
    />

    <h1>Google charts - Pie Chart</h1>
    <GChart
      type="PieChart"
      :data="pieChartData"
      :options="pieOptions"
    />

    <h1>Google charts - Gauge Chart</h1>
    <GChart
      :settings="{ packages: ['corechart', 'gauge']}"
      type="Gauge"
      :options="gaugeOptions"
      :data="gaugeData"
    />

  </div>
</template>

<script>
import {GChart} from 'vue-google-charts'
import TestButton from '../components/Button.vue'

export default {
  components: {
    GChart, TestButton
  },
  data: function() {
    return {
      enonicStuff: {
        color1: '#e0440e',
        color2: '#e6693e',
        color3: '#ec8f6e',
        thing: 'Harusju Schìnsúru'
      },
      chartData: [
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000,  400, 200],
          ['2015', 1170,  460, 250],
          ['2016',  660, 1120, 300],
          ['2017', 1030,  540, 350]
      ],
      pieChartData: [
          ['Task', 'Hours per Day'],
          ['Sewing',   11],
          ['Eat',      2],
          ['Commute',  0.5],
          ['Reading',  2],
          ['Sleep',    8]
      ],
      gaugeData: [
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]
      ],
      gaugeOptions: {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
      },
      gaugePackages: ['gauge'],

      chartOptions: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      },
      message: "Dejitaru kaeru",

    }
  },
  computed: {
    pieOptions: function(){return{
      title: this.enonicStuff.thing,
      subtitle: 'I read the news today oh boy',
      colors: [this.enonicStuff.color1,
               this.enonicStuff.color2,
               this.enonicStuff.color3, '#f3b49f', '#f6c7b6']

    }}
  }


}

</script>
