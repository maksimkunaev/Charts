const Chart = require('./charts');
const Thumb = require('./thumb');

const chart_data = require('./chart_data');
const data = chart_data[4];

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

function switchData(data, drawShort) {
    const checkboxes = document.createElement('div');
    checkboxes.classList.add('checkboxes');

    const newData = copyObject(data);

    newData.columns.map((col, idx) => {
        if (idx === 0) return;
        const name = col[0];
        const checkbox = document.createElement('input');
        const div = document.createElement('div');
        checkbox.type = 'checkbox';
        checkbox.classList = 'checkbox';

        const changeData = (name, idx, e)=> {

            const cuttedNames = e.target.checked && [name];
            const cuttedData = copyObject(newData, cuttedNames, idx);
            drawShort(cuttedData, 0)
        };

        checkbox.style.display = 'none';
        checkbox.addEventListener('change', changeData.bind(window, name, idx));
        const label = document.createElement('label');
        const text = document.createTextNode(name);

        div.classList = 'custom-checkbox';
        label.appendChild(checkbox);
        label.appendChild(div);
        label.appendChild(text);
        checkboxes.appendChild(label);
    });

    document.body.appendChild(checkboxes)
}



function copyObject(data, names, idx) {
    let newData = {};

    for (const key in data) {
        if (typeof data[key] === 'object') {
            newData[key] = {
                ...data[key],
            }
        }

        if (data[key].slice) {
            newData[key] = data[key].slice();
        }
    }

    if (names && names.length) {
        names.forEach(() => {
            newData.columns.splice(idx,1);
        });
    }


    return newData;
}

switchData(data, drawShort.bind(shortChart));
