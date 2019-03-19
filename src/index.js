const Chart = require('./charts');
const Thumb = require('./thumb');

const chart_data = require('./chart_data');
const data = chart_data[1];

const shortChart = new Chart('view', data);
const longChart = new Chart('timeLine', data);

const drawShort = shortChart.drawShort;

const configThumb = {
    thumb: '.thumb',
    parent: '.lineChart',
    method: drawShort.bind(shortChart, data),
    longChart: longChart,
};

const thumb = new Thumb(configThumb, data);

function drawCharts(data) {
    shortChart.drawShort(data,0);
    longChart.drawLong(data,0);
}

drawCharts(data);

const switcher = document.querySelector('.swither');
const thumbElem = document.querySelector('.thumb');
const swithLabel = document.querySelector('.swithLabel');
const labelText = swithLabel.querySelector('span');
const tooltip = document.querySelector('.tooltip');
switcher.addEventListener('change', onChange);

function onChange({target}) {
    const { checked } = target;
    const theme = checked ? 'night' : 'day';
    switchTheme(theme);
}
function switchTheme(theme) {
    if (theme === 'night') {
        document.body.style.backgroundColor = '#242f3e';
        thumbElem.classList.add('thumb-nightTheme');
        labelText.innerText = 'Switch to Day mode';
        labelText.style.color = '#35a8f1';
        tooltip.classList.add('tooltip-nightTheme');

    } else if (theme === 'day') {
        document.body.style.backgroundColor = 'transparent';
        thumbElem.classList.remove('thumb-nightTheme');
        labelText.innerText = 'Switch to Night mode';
        labelText.style.color = '#000';
        tooltip.classList.remove('tooltip-nightTheme');

    }
}

function switchData(data) {
    const checkboxes = document.createElement('div');
    checkboxes.classList.add('checkboxes');

    const isVisible = [];
    data.columns.map((col, idx) => {
        if (idx === 0) return;
        const name = col[0];
        const checkbox = document.createElement('input');
        const div = document.createElement('div');
        checkbox.type = 'checkbox';
        checkbox.classList = 'checkbox';
        checkbox.checked = true;

        const changeData = (name, idx, e)=> {

            isVisible[idx].isVisible = e.target.checked;

            shortChart.swithcData(isVisible);
        };

        checkbox.style.display = 'none';
        checkbox.addEventListener('change', changeData.bind(window, name, idx - 1));
        const label = document.createElement('label');
        const text = document.createTextNode(name);

        div.classList = 'custom-checkbox';
        label.appendChild(checkbox);
        label.appendChild(div);
        label.appendChild(text);
        checkboxes.appendChild(label);

        isVisible.push({
            isVisible: true,
            idx: idx - 1,
        });
    });

    document.body.appendChild(checkboxes)
}

switchData(data, drawShort.bind(shortChart));
