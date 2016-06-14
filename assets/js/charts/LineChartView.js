let Chart = require('chart.js');

class lineChart {
	constructor(args){
		this.ctx = document.getElementById(args.id).getContext('2d');
		this.labels = args.labels;
		this.data2015 = args.data2015;
		this.data2014 = args.data2014;
		this.chartColor = args.chartColor;
		this.init();
	}
	init() {
		this.render();
		return this;
	}
	render() {
		let lineData = {
	    labels: this.labels,
	    datasets: [
        {
          label: 'Temperature in 2015',
          fill: false,
          lineTension: 0.1,
          backgroundColor: this.chartColor.transparency.rgba,
          borderColor: this.chartColor.red.rgba,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: this.chartColor.transparency.rgba,
          pointBackgroundColor: this.chartColor.transparency.rgba,
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: this.chartColor.red.rgba,
          pointHoverBorderColor: this.chartColor.transparency.rgba,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.data2015.temperatureArray
        },
        {
          label: 'Temperature in 2014',
          fill: false,
          lineTension: 0.1,
          backgroundColor: this.chartColor.transparency.rgba,
          borderColor: this.chartColor.orange.rgba,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: this.chartColor.transparency.rgba,
          pointBackgroundColor: this.chartColor.transparency.rgba,
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: this.chartColor.orange.rgba,
          pointHoverBorderColor: this.chartColor.transparency.rgba,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.data2014.temperatureArray
        },
      ]
    };
		let options = {
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Month'
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: '°C'
					},
					ticks: {
						suggestedMin: 0,
						suggestedMax: 30,
						stepSize: 5
					}
				}]
			}
		};
		this.chart = new Chart(this.ctx, {
			type: 'line',
			data: lineData,
			options: options
		});
		return this;
	}
}

module.exports = lineChart;
