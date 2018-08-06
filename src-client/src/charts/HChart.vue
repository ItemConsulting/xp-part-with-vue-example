<template>
  <div><div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
    name : "Chart",
    props : {
      series : {
        type: Array,
        required: true
      }
    },
    data : function() {
      return {
        target: undefined
      }
    },
    mounted : function() {
      this.target = Highcharts.chart(this.$el, {
        title: {
          text: 'Monthly Average Temperature',
          x: -20 //center
        },
        subtitle: {
          text: 'Source: WorldClimate.com',
          x: -20
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
          text: 'Temperature (°C)'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: '°C'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
          borderWidth: 0
      },
      series: this.series
    });
  },
  beforeDestroy: function() {
    this.target.destroy();
  },
};

</script>
