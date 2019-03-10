const data = new Array(50).fill(1);

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
    if(!startDate) return;
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
const dayWidth = wrapCoor.width / data.length < 15 ? 15 : wrapCoor.width / data.length;
const previewWidth =  9 * dayWidth;
preView.style.width = previewWidth + 'px';

const left = 0;
const right = previewWidth + 'px';

lineChart.style.backgroundImage = `linear-gradient(90deg, rgba(179, 179, 179, 0.25) ${left}, #ffffff00 ${left}, #ffffff00 ${right},rgba(179, 179, 179, 0.25) ${right})`;

preView.addEventListener('mousedown',onMouseDown);
function onMouseDown(e) {
    e.preventDefault();
    const preViewCoords = getCoords(preView);
    const shiftX = e.pageX - preViewCoords.left;

    moveAt(e);

    preView.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        let newLeft = e.pageX - shiftX - wrapCoor.left;
        if (newLeft < 0) {
            newLeft = 0;
        }

        const rightEdge = lineChart.offsetWidth - preView.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        preView.style.left = newLeft + 'px';

        const left = preView.style.left;
        const right = newLeft + preView.offsetWidth + 'px';

        lineChart.style.backgroundImage = `linear-gradient(90deg, rgba(179, 179, 179, 0.25) ${left}, #ffffff00 ${left}, #ffffff00 ${right},rgba(179, 179, 179, 0.25) ${right})`;

        const leftPreview = e.pageX - shiftX;

        drawChart(leftPreview / dayWidth)
    }
    preView.addEventListener('mousemove',onMouseMove)

    function onMouseMove(e) {

        e.preventDefault()

        moveAt(e);
    };
    // preView.addEventListener('touchmove',onMouseMove)

    function onMouseUp(e) {
        e.preventDefault()
        preView.removeEventListener('mousemove',onMouseMove);

        preView.removeEventListener('mouseup',onMouseUp);

    };

    preView.addEventListener('mouseup',onMouseUp)
    // preView.addEventListener('touchend',onMouseUp)
}
// preView.addEventListener('touchstart',onMouseDown);

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


function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent({
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    // event.preventDefault();
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}
//
init()