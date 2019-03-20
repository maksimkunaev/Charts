const Chart = require('./charts');
const Slider = require('./slider');

const chart_data = require('./chart_data');
const data = chart_data[1];

const shortChart = new Chart('view', data);
const longChart = new Chart('timeLine', data);

const drawShort = shortChart.drawShort;

const configSlider = {
    slider: '.slider',
    parent: '.lineChart',
    method: drawShort.bind(shortChart, data),
    longChart: longChart,
};

//init draggable slider
new Slider(configSlider, data);

function drawCharts(data) {
    shortChart.drawShort(data,0);
    longChart.drawLong(data,0);
}

drawCharts(data);

const switcher = document.querySelector('.switcher');
const sliderElem = document.querySelector('.slider');
const switchLabel = document.querySelector('.switchLabel');
const labelText = switchLabel.querySelector('span');
const tooltip = document.querySelector('.tooltip');
const checkboxes = document.querySelector('.checkboxes');

switcher.addEventListener('change', onChange);

const theme = {
    day: {
        body: 'transparent',
        sliderElem: 'slider',
        labelText: 'Switch to Night mode',
        label: '#000',
        tooltip: 'tooltip',
    },
    night: {
        body: '#242f3e',
        sliderElem: 'slider-nightTheme',
        labelText: 'Switch to Day mode',
        label: '#35a8f1',
        tooltip: 'tooltip-nightTheme',
    }
};

function onChange({target}) {
    const { checked } = target;
    const theme = checked ? 'night' : 'day';
    switchTheme(theme);
}
function switchTheme(mode) {
    let newTheme = theme[mode];
    let nightTheme = theme.night;

    document.body.style.backgroundColor = newTheme.body;
    labelText.innerText = newTheme.labelText;
    labelText.style.color = newTheme.label;

    if (mode === 'night') {
        sliderElem.classList.add(nightTheme.sliderElem);
        tooltip.classList.add(nightTheme.tooltip);

    } else if (mode === 'day') {
        sliderElem.classList.remove(nightTheme.sliderElem);
        tooltip.classList.remove(nightTheme.tooltip);

    }
}

function switchData(data) {

    const changeData = (name, idx, e)=> {
        config[idx].isVisible = e.target.checked;
        shortChart.switchData(config);
    };

    const config = [];
    data.columns.map((col, idx) => {
        if (idx === 0) return;
        const name = col[0];

        createCheckbox(name, idx, config, changeData, checkboxes);
    });
}

switchData(data, drawShort.bind(shortChart));

function createCheckbox(name, idx, config, onChange, parent) {
    const checkbox = document.createElement('input');
    const div = document.createElement('div');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = true;
    checkbox.style.display = 'none';
    checkbox.addEventListener('change', onChange.bind(window, name, idx - 1));
    const label = document.createElement('label');
    const text = document.createTextNode(name);

    div.className = 'custom-checkbox';
    label.appendChild(checkbox);
    label.appendChild(div);
    label.appendChild(text);
    parent.appendChild(label);

    config.push({
        isVisible: true,
        idx: idx - 1,
    });
}