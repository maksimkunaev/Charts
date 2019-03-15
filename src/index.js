const Chart = require('./charts');
const chart_data = require('./chart_data');
const data = chart_data[0];

const chart = new Chart('view', data);

chart.drawChart(data,0);

const timeLine = new Chart('timeLine', data);
timeLine.drawTimeLine(data,0);