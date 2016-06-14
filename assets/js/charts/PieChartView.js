let Chart = require('chart.js');

class PieChart {
	constructor(args){
		this.el = document.getElementById(args.id).getContext('2d');
		this.labels = args.labels;
		this.data = args.data;
		this.colors = args.colors;
		this.chartColor = args.chartColor;
		this.init();
	}
	init() {
		this.render();
		return this;
	}
	render() {
		let pieData = {
	    labels: this.labels,
	    datasets: [
				{
					data: this.data,
					backgroundColor: this.colors,
		      hoverBackgroundColor: this.colors
			  }
      ]
    };
		let options = {};
		this.chart = new Chart(this.el, {
			type: 'doughnut',
			data: pieData,
			options: options
		});
		return this;
	}
}

module.exports = PieChart;
