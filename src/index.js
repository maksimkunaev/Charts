const Chart = require('./charts');
const Slider = require('./slider');

const chart_data = require('./chart_data');
const data = chart_data[3];

const wrap = document.querySelector('.wrap');
const switcher = document.querySelector('.switcher');
const sliderElem = document.querySelector('.slider');
const switchLabel = document.querySelector('.switchLabel');
const checkboxes = document.querySelector('.checkboxes');
const labelText = switchLabel.querySelector('span');
const tooltipElem = document.querySelector('.tooltip');
const columnsElem = tooltipElem.querySelector('.columns');
const dateElem = tooltipElem.querySelector('.date');
const slider = document.querySelector('.slider');
const lineChart = document.querySelector('.lineChart');
const loadWrap = document.querySelector('.loadWrap');

const configShortChart = {
    canvas: 'view',
    tooltipElem,
    columnsElem,
    dateElem,
    switchLabel: labelText,
};

const configLongChart = {
    canvas: 'timeLine',
};
const shortChart = new Chart(configShortChart, data, 'short');
const longChart = new Chart(configLongChart, data, 'long');

const drawShort = shortChart.drawShort;

const configSlider = {
    main: 'view',
    slider: slider,
    parent: lineChart,
    method: drawShort.bind(shortChart, data),
    longChart: longChart,
};

//init draggable slider
new Slider(configSlider, data);

const theme = {
    day: {
        wrap: 'transparent',
        sliderElem: 'slider',
        labelText: 'Switch to Night Mode',
        tooltip: 'tooltip',
        checkboxes: '#000',
    },
    night: {
        wrap: '#242f3e',
        sliderElem: 'slider-nightTheme',
        labelText: 'Switch to Day Mode',
        tooltip: 'tooltip-nightTheme',
        checkboxes: '#fff',
    }
};
switcher.addEventListener('change', onChange);
switchTheme.call(this, 'day');
function onChange({target}) {
    const { checked } = target;
    const theme = checked ? 'night' : 'day';
    switchTheme(theme);
}
function switchTheme(mode) {
    let newTheme = theme[mode];
    let nightTheme = theme.night;

    wrap.style.backgroundColor = newTheme.wrap;
    labelText.innerText = newTheme.labelText;
    checkboxes.style.color = newTheme.checkboxes;

    if (mode === 'night') {
        sliderElem.classList.add(nightTheme.sliderElem);
        tooltipElem.classList.add(nightTheme.tooltip);

    } else if (mode === 'day') {
        sliderElem.classList.remove(nightTheme.sliderElem);
        tooltipElem.classList.remove(nightTheme.tooltip);
    }
}

function switchData(data) {
    const changeData = (idx, color, e)=> {
        const { checked } = e.target;
        const parent = e.target.parentNode;
        const customCheckbox = parent.querySelector('.custom-checkbox');

        config[idx].isVisible = checked;
        customCheckbox.style.backgroundColor = checked ? color : 'transparent';
        shortChart.switchData(config);
    };

    const config = [];
    data.columns.map((col, idx) => {
        if (idx === 0) return;
        const fieldName = col[0];
        const color = data.colors[fieldName];
        const name = data.names[fieldName];

        createCheckbox(name, idx, config, changeData, checkboxes, color);
    });
}

switchData(data, drawShort.bind(shortChart));

function createCheckbox(name, idx, config, onChange, parent, color) {
    const checkbox = document.createElement('input');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const text = document.createTextNode(name);
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = true;
    checkbox.style.display = 'none';
    checkbox.addEventListener('change', onChange.bind(window, idx - 1, color));

    div.className = 'custom-checkbox';
    div.style.backgroundColor = color;

    label.appendChild(checkbox);
    label.appendChild(div);
    label.appendChild(text);
    parent.appendChild(label);

    config.push({
        isVisible: true,
        idx: idx - 1,
    });
}

window.onload = function() {
    loadWrap.style.display = 'none';
};