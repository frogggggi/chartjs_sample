let Chart = require('chart.js');

class BarChar {
	constructor(args){
		this.el = document.getElementById(args.id).getContext('2d');
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
		let barData = {
	    labels: this.labels,
	    datasets: [
				{
					label: 'Precipitation in 2015',
          backgroundColor: this.chartColor.skyblue.rgba,
          hoverBackgroundColor: this.chartColor.skyblue.rgba,
          hoverBorderColor: this.chartColor.skyblue.rgba,
          data: this.data2015.precipitationArray
        },
				{
					label: 'Precipitation in 2014',
          backgroundColor: this.chartColor.blue.rgba,
          hoverBackgroundColor: this.chartColor.blue.rgba,
          hoverBorderColor: this.chartColor.blue.rgba,
          data: this.data2014.precipitationArray
        }
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
						labelString: 'mm'
					},
					ticks: {
						suggestedMin: 0,
						suggestedMax: 550,
						stepSize: 50
					}
				}]
			}
		};
		this.chart = new Chart(this.el, {
			type: 'bar',
			data: barData,
			options: options
		});
		return this;
	}
}

module.exports = BarChar;
