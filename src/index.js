const Chart = require('./charts');
const Slider = require('./slider');

const chart_data = require('./chart_data');

function init(id, data) {
    const id1 = `view_${id}`;
    const id2 = `timeLine_${id}`;

    function createElem(tag, attributes, textContent) {
        const elem = document.createElement(tag);

        for (const key in attributes) {
            elem.setAttribute(key, attributes[key]);
        }
        if (textContent) elem.textContent = textContent;

        return elem;
    }

    function  createHtmlBlock(elems, parent) {
        elems.forEach(elem => {
            parent.appendChild(elem);
        });

        return parent;
    };

    const wrap = createElem('div', { class: 'wrap' });
    const loadWrap = createElem('div', { class: 'loadWrap' });
    const content = createElem('div', { class: 'content' });
    const viewChart = createElem('div', { class: 'viewChart' });
    const lineChart = createElem('div', { class: 'lineChart' });
    const canvasView = createElem('canvas', { class: 'view', id: id1 });
    const canvasLong = createElem('canvas', { class: 'timeLine', id: id2 });
    const sliderElem = createElem('div', { class: 'slider' });
    loadWrap.innerHTML = `<div class="preloader"><div></div><div></div><div></div><div></div></div>`;

    const dateElem = createElem('div', { class: 'date' }, 'Sat, Feb 24');
    const columnsElem = createElem('div', { class: 'columns' });
    const tooltipElem = createElem('div', { class: 'tooltip' });
    const checkboxes = createElem('div', { class: 'checkboxes' });

    const switchLabel = createElem('div', { class: 'switchLabel' });
    const label = createElem('label');
    const labelText = createElem('span');
    const switcher = createElem('input', { class: 'switcher', type: 'checkbox' });


    const toolTipBlock = createHtmlBlock([dateElem, columnsElem], tooltipElem);
    const viewChartBlock = createHtmlBlock([canvasView, toolTipBlock], viewChart);
    const lineChartBlock = createHtmlBlock([canvasLong, sliderElem], lineChart);
    const contentBlock = createHtmlBlock([viewChartBlock, lineChartBlock, checkboxes], content);
    const labelBlock = createHtmlBlock([labelText, switcher], label);
    const switchLabelBlock = createHtmlBlock([labelBlock], switchLabel);
    const wrapBlock = createHtmlBlock([loadWrap, contentBlock, switchLabelBlock], wrap);

    document.body.appendChild(wrapBlock);
    loadWrap.style.display = 'none'
    const configShortChart = {
        wrap,
        canvas: id1,
        tooltipElem,
        columnsElem,
        dateElem,
        switchLabel: labelText,
    };

    const configLongChart = {
        canvas: id2,
    };
    const shortChart = new Chart(configShortChart, data, 'short');
    const longChart = new Chart(configLongChart, data, 'long');

    const { renderChart } = shortChart;

    const configSlider = {
        main: id1,
        slider: sliderElem,
        parent: lineChart,
        method: renderChart.bind(shortChart),
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
            mainColor: '#000',
            subColor: '#fff',
        },
        night: {
            wrap: '#242f3e',
            sliderElem: 'slider-nightTheme',
            labelText: 'Switch to Day Mode',
            tooltip: 'tooltip-nightTheme',
            checkboxes: '#fff',
            mainColor: '#fff',
            subColor: '#222f3f',
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

        renderChart.call(shortChart, {
            theme: theme[mode],
        })
    }

    function switchData(data) {
        const changeData = (idx, color, e)=> {
            const { checked } = e.target;
            const parent = e.target.parentNode;
            const customCheckbox = parent.querySelector('.custom-checkbox');

            config[idx].isVisible = checked;
            customCheckbox.style.backgroundColor = checked ? color : 'transparent';
            shortChart.renderChart({
                isVisible: config,
            });
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

    switchData(data, renderChart.bind(shortChart));

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
}

init(1, chart_data[0]);
init(2, chart_data[1]);
init(3, chart_data[2]);
init(4, chart_data[3]);
init(5, chart_data[4]);