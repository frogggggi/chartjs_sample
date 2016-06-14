const Chart = require('chart.js');
const sample = require('./data/sample');
const LineChartView = require('./charts/LineChartView');
const BarChartView = require('./charts/BarChartView');
const PieChartView = require('./charts/PieChartView');
const RadarChartView = require('./charts/RadarChartView');

class MainController {
  constructor() {
    this.data = sample.data;
    this.setChartColor();
    this.chartClobalSetup();
    this.parseForChart();
    this.getDataPie();
    this.renderCharts();
    return;
  }
  renderCharts() {
    this.childView = new LineChartView({
      id: 'lineChart',
      labels: this.labelDate,
      data2015: this.data2015,
      data2014: this.data2014,
      chartColor: this.chartColor
    });
    this.childView = new BarChartView({
      id: 'barChart',
      labels: this.labelDate,
      data2015: this.data2015,
      data2014: this.data2014,
      chartColor: this.chartColor
    });
    this.childView = new RadarChartView({
      id: 'radarChart',
      labels: this.labelDate,
      data2015: this.data2015,
      data2014: this.data2014,
      chartColor: this.chartColor
    });
    this.childView = new PieChartView({
      id: 'pieChart',
      labels: this.pieLabels,
      data: this.pieData,
      colors: this.pieColors,
      chartColor: this.chartColor
    });
    return this;
  }
  setChartColor() {
    this.chartColor = {
      black: {
        rgba: 'rgba(119, 119, 119, 1)',
        hexadecimal: '#777'
      },
      white: {
        rgba: 'rgba(255, 255, 255, 1)',
        hexadecimal: '#fff'
      },
      backgroundColor: {
        rgba: 'rgba(0, 0, 0, 0.6)'
      },
      red: {
        rgba: 'rgba(237, 69, 84, 1)',
        hexadecimal: '#ed4554'
      },
      orange: {
        rgba: 'rgba(254, 157, 62, 1)',
        hexadecimal: '#fe9d3e'
      },
      yellow: {
        rgbaBg: 'rgba(255, 200, 83, 0.2)',
        rgba: 'rgba(255, 200, 83, 1)',
        hexadecimal: '#ffc853'
      },
      skyblue: {
        rgbaBg: 'rgba(103, 193, 228, 0.2)',
        rgba: 'rgba(103, 193, 228, 1)',
        hexadecimal: '#67c1e4'
      },
      blue: {
        rgba: 'rgba(113, 130, 163, 1)',
        hexadecimal: '#7182a3'
      },
      transparency: {
        rgba: 'rgba(0, 0, 0, 0)'
      }
    };
    return this;
  }
  chartClobalSetup() {
    const chartGlobal = Chart.defaults.global;
    chartGlobal.defaultFontSize = 14;
		chartGlobal.defaultFontColor = this.chartColor.black.rgba;
		chartGlobal.legend.position = 'bottom';
		chartGlobal.legend.labels.fontSize = 16;
		chartGlobal.legend.labels.padding = 20;
		chartGlobal.tooltips.xPadding = 20;
		chartGlobal.tooltips.yPadding = 20;
		chartGlobal.tooltips.cornerRadius = 3;
		chartGlobal.tooltips.titleFontSize = 18;
		chartGlobal.tooltips.titleMarginBottom = 10;
		chartGlobal.tooltips.bodyFontSize = 14;
    chartGlobal.tooltips.backgroundColor = this.chartColor.backgroundColor.rgba;
    return this;
  }
  parseForChart() {
    this.labelDate = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.data = this.data.reverse();
    this.data2015 = {};
    this.data2015.array = _.filter(this.data, (data) => { return data.year === 2015; });
    this.data2015 = {
      temperatureArray: _.map(this.data2015.array, (data) => { return data.temperature; }),
      precipitationArray: _.map(this.data2015.array, (data) => { return data.precipitation; }),
      snowfallArray: _.map(this.data2015.array, (data) => { return data.snowfall; }),
      humidityArray: _.map(this.data2015.array, (data) => { return data.humidity; })
    };
    this.data2014 = {};
    this.data2014.array = _.filter(this.data, (data) => { return data.year === 2014; });
    this.data2014 = {
      temperatureArray: _.map(this.data2014.array, (data) => { return data.temperature; }),
      precipitationArray: _.map(this.data2014.array, (data) => { return data.precipitation; }),
      snowfallArray: _.map(this.data2014.array, (data) => { return data.snowfall; }),
      humidityArray: _.map(this.data2014.array, (data) => { return data.humidity; })
    };
    return this;
  }
  getDataPie() {
    this.pieLabels = ['React', 'AngularJS', 'Backbone.js', 'Knockout.js', 'Ember.js'];
    this.pieData = [40, 30, 15, 10, 5];
    this.pieColors = [
      this.chartColor.red.hexadecimal,
      this.chartColor.orange.hexadecimal,
      this.chartColor.yellow.hexadecimal,
      this.chartColor.skyblue.hexadecimal,
      this.chartColor.blue.hexadecimal
    ];
    return this;
  }
}

new MainController();
