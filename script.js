
// const data = [8.702728327689854, 2.544332165436225, 8.499468893258719, 3.1948647344875147, 8.658347530160848, 2.5003430825924955, 2.3728092066329998, 3.568301386645256, 7.438883602299978, 9.923708565660936, 7.407306422316426, 0.9565464957349334, 6.3378250966269185, 9.789070192977874, 4.679942351801907, 8.192381099471419, 0.9757396511331651, 5.162970188237351, 1.6626012747433827, 1.7497245445229415, 4.2376916583243425, 0.8839849666347677, 9.750875845820705, 6.544106345265604, 2.9503739887080793, 5.2938144445416295, 8.79028102858701, 6.633624803805162, 5.104750145614649, 6.1582931450273986, 3.660768581316478, 1.8172477864601544, 5.277156774733607, 9.435013942798378, 7.456377486000159, 4.754815356907103, 0.14523240236696822, 2.679347091352653, 5.17248006208177, 9.913050221426392];
var data = new Array(50).fill(1);

data.forEach((i, idx)=>{
    data[idx] = Math.random() * 20;
});

const view = document.getElementById("view");
view.width = 1200;
view.height = 500;
const ctx = view.getContext("2d");

const maxCount = 20;
const x0 = 30;
const y0 = 30;
const width = view.width;
const height = view.height - 90;
const stepY = Math.round(height / maxCount);
const stepX = Math.round(width / 9 );
let startDate = 0;

function drawChart(startDate, endDate, range) {
    clearChart();

    ctx.beginPath();

    const newData = data.slice(startDate, startDate + 10);
    newData.forEach((point, idx) => {

        const x = idx * stepX;
        const y = y0 + (height - point  * stepY);
        if (idx === 0)
            ctx.moveTo(x, y);
        else
            ctx.lineTo(x, y);
    });

    ctx.strokeStyle = 'green'; //цвет линии
    ctx.lineWidth = 3;//толщина линии
    ctx.stroke();
}

function clearChart() {
    ctx.clearRect(0, 0, view.width, view.height);
}

drawChart(startDate);

///timeLine
(function drawTimeLine() {
    const timeLine = document.getElementById("timeLine");
    timeLine.width = 1200;
    timeLine.height = 500;
    const lineCtx = timeLine.getContext("2d");

    const maxCount = 20;
    const x0 = 30;
    const y0 = 30;
    const width = timeLine.width;
    const height = timeLine.height - 90;
    const stepY = Math.round(height / maxCount);
    const stepX = Math.round(width / data.length);
    let startDate = 0;

    function drawChartLine(startDate, endDate, range) {
        clearChart();

        lineCtx.beginPath();

        data.forEach((point, idx) => {

            const x = idx * stepX;
            const y = y0 + (height - point  * stepY);
            if (idx === 0)
                lineCtx.moveTo(x, y);
            else
                lineCtx.lineTo(x, y);
        });

        lineCtx.strokeStyle = 'green'; //цвет линии
        lineCtx.lineWidth = 3;//толщина линии
        lineCtx.stroke();
    }

    function clearChart() {
        lineCtx.clearRect(0, 0, view.width, view.height);
    }

    drawChartLine(startDate)
})();

////draganddrop
const preView = document.querySelector('.preview');

const lineChart = document.querySelector('.lineChart');

const wrapCoor = getCoords(lineChart);
const dayWidth = wrapCoor.width / data.length;
const previewWidth =  9 * dayWidth;
preView.style.width = previewWidth + 'px';

const left = 0;
const right = previewWidth + 'px';

lineChart.style.backgroundImage = `linear-gradient(90deg, #3c3c3c61 ${left}, #ffffff00 ${left}, #ffffff00 ${right},#3c3c3c61 ${right})`;

preView.onmousedown = function(e) {
    var coords = getCoords(preView);
    var shiftX = e.pageX - coords.left;
    var shiftXRight = coords.right - e.pageX;

    preView.style.position = 'absolute';
    moveAt(e);

    preView.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        // if (e.pageX - shiftX < wrapCoor.left) {
        //     preView.style.left = '0px';
        // } else if (e.pageX + shiftXRight + wrapCoor.left > wrapCoor.right) {
        //     preView.style.right = wrapCoor.right + wrapCoor.left + 'px';
        // } else {
        //     preView.style.left = e.pageX - shiftX + 'px';
        // }
        preView.style.left = e.pageX - shiftX + 'px';
        const left = preView.style.left;
        const right = e.pageX + shiftXRight + 'px';

        lineChart.style.backgroundImage = `linear-gradient(90deg, #3c3c3c61 ${left}, #ffffff00 ${left}, #ffffff00 ${right},#3c3c3c61 ${right})`;

        const leftPreview = e.pageX - shiftX;
        drawChart(leftPreview / dayWidth)
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    document.onmouseup = function() {
        document.onmousemove = null;
        preView.onmouseup = null;
    };
};

preView.ondragstart = function() {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    const box = elem.getBoundingClientRect();
    return {
        top: box.top,
        left: box.left,
        right: box.right,
        width: box.width,
    };
}
