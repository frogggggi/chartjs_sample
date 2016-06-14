let Chart = require('chart.js');

class PieChart {
	constructor(args){
		this.el = document.getElementById(args.id).getContext('2d');
		this.labels = args.labels;
		this.data2015 = args.data2015;
		this.data2014 = args.data2014;
		this.chartColor = args.chartColor;
		this.init();
	}
	init() {
		Chart.defaults.global.defaultFontSize = 14;
		Chart.defaults.global.defaultFontColor = this.chartColor.black.rgba;
		Chart.defaults.global.legend.position = 'bottom';
		Chart.defaults.global.legend.labels.fontSize = 16;
		Chart.defaults.global.legend.labels.padding = 20;
		Chart.defaults.global.tooltips.xPadding = 20;
		Chart.defaults.global.tooltips.yPadding = 20;
		Chart.defaults.global.tooltips.backgroundColor = this.chartColor.backgroundColor.rgba;
		Chart.defaults.global.tooltips.cornerRadius = 3;
		Chart.defaults.global.tooltips.titleFontSize = 18;
		Chart.defaults.global.tooltips.titleMarginBottom = 10;
		Chart.defaults.global.tooltips.bodyFontSize = 14;
		this.render();
		return this;
	}
	render() {
		let radarData = {
	    labels: this.labels,
	    datasets: [
				{
					label: 'Humidity in 2015 (%)',
          backgroundColor: this.chartColor.skyblue.rgbaBg,
          borderColor: this.chartColor.skyblue.rgba,
          pointBackgroundColor: this.chartColor.skyblue.rgba,
          pointBorderColor: this.chartColor.transparency.rgba,
          pointHoverBackgroundColor: this.chartColor.skyblue.rgba,
          pointHoverBorderColor: this.chartColor.skyblue.rgba,
          data: this.data2015.humidityArray
        },
        {
					label: 'Humidity in 2014 (%)',
          backgroundColor: this.chartColor.yellow.rgbaBg,
          borderColor: this.chartColor.yellow.rgba,
          pointBackgroundColor: this.chartColor.yellow.rgba,
          pointBorderColor: this.chartColor.transparency.rgba,
          pointHoverBackgroundColor: this.chartColor.yellow.rgba,
          pointHoverBorderColor: this.chartColor.yellow.rgba,
          data: this.data2014.humidityArray
        }
      ]
    };
		let options = {
			scale: {
				reverse: false,
				lineArc: false,
		    position: 'chartArea',
				angleLines: {
	        display: true,
	        color: 'rgba(0, 0, 0, 0.1)',
	        lineWidth: 1
		    },
		    ticks: {
					beginAtZero: true,
	        showLabelBackdrop: true,
	        backdropColor: 'rgba(255,255,255,0.8)',
	        backdropPaddingY: 4,
	        backdropPaddingX: 4,
	        maxTicksLimit: 11,
		    },
		    pointLabels: {
		      fontSize: 14,
		      fontColor: '#777'
		    }
			}
		};
		this.chart = new Chart(this.el, {
			type: 'radar',
			data: radarData,
			options: options
		});
		return this;
	}
}

module.exports = PieChart;
