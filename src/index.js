const Chart = require('./charts');
const Thumb = require('./thumb');

const chart_data = require('./chart_data');
const data = chart_data[3];

const shortChart = new Chart('view', data);
const longChart = new Chart('timeLine', data);

const configThumb = {
    thumb: '.thumb',
    parent: '.lineChart',
    method: shortChart.drawShort.bind(shortChart, data),
    longChart: longChart,
};

const thumb = new Thumb(configThumb, data);

function drawCharts(data) {
    shortChart.drawShort(data,0);
    longChart.drawLong(data,0);
}

drawCharts(data);