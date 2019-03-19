const utils = require('./utils');
const hexToRgb = utils.hexToRgb;
const getTooltipInfo = utils.getTooltipInfo;
const formatDate = utils.formatDate;

class Chart {
    canvas = null;

    canvasConfig = {
        width: 600,
        height: 500,
    };

    chartConfig = {
        screenWidth: null,
        columns: [],
        xPositions: [],
        x0: 30,
        y0: 30,
        stepX: 10,
        stepY: 10,
        countX: 0,
        countY: 0,
        data: [],
        dates: [],
        view: '',
        position: '',
        datesPerLine: 8,
        tooltipInfo: {},
    };

    constructor(ref, data) {
        const { width, height } = this.canvasConfig;

        this.canvas = document.getElementById(ref);

        this.ctx = this.canvas.getContext("2d");

        this.chartConfig.data = data;
        this.canvasConfig.ref = ref;
        this.setScreenOptions();
        this.canvas.addEventListener('click', this.onCanvasClick.bind(this));
    }

    setConfig(data, startDate, endDate, view) {
        const { columns, colors } = data;

        const { width, height } = this.canvasConfig;
        const { y0 } = this.chartConfig;
        let maxX = 0;
        let maxY = 0;
        this.chartConfig.view = view;

        this.chartConfig.columns = [];
        columns.forEach((column, idx) => {

            if (idx === 0) return;

            const start = startDate ? startDate : -11;
            const end = endDate ? endDate + 1: column.length;
            if (!endDate || end >= column.length) {
                this.chartConfig.position = 'rightSide';
            } else {
                this.chartConfig.position = '??????';
            }

            let data = [];

            switch(view) {
                case 'short':
                data = column.slice(start, end);
                    break;

                case 'long':
                data = column.slice(1);
                    break;

                default:
                    data = column.slice(1);
                    break;
            }

            // set stepY
            maxY = Math.max(...data.slice(1)) > maxY ? Math.max(...data.slice(1)) : maxY;

            // set stepX
            maxX = data.length - 1;

            const name = column[0];
            const color = colors[name];
            const newColumn = {
                start,
                end,
                name,
                data,
                color,
            };
            this.chartConfig.columns.push(newColumn);

            //set array of dates for X coordinate
            if (idx !== 1) return; //only for one column is enough
            this.chartConfig.dates = this.chartConfig.data.columns[0].slice(start, end).map(ms => {
                return formatDate(new Date(ms))
            });
        });

        this.chartConfig.countX = maxX;
        this.chartConfig.countY = maxY;

        this.chartConfig.stepY = height/ maxY;
        this.chartConfig.stepX = endDate ? (width * 1.1) / maxX : width / maxX ;
    }

    drawShort(data, startDate, endDate) {
        this.setConfig(data, startDate, endDate, 'short');
        this.clearChart();
        this.drawChart();
        this.drawHorizontalLines();
        this.drawDateCoords();
    }

    drawLong(data, startDate, endDate) {
        this.setConfig(data, startDate, endDate, 'long');
        this.drawChart()
    }

    drawChart() {
        const { height } = this.canvasConfig;
        const { y0, stepX, stepY, columns, view, position, dates } = this.chartConfig;

        const { ctx } = this;
        const draw = (column, index) => {
            ctx.beginPath();

            const { data, color } = column;
            data.forEach((point, idx) => {
                let x = position === 'rightSide' ? idx * stepX : idx * stepX - stepX/2;
                let y = y0 + (height - y0 - point * stepY);

                if (idx === 0)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);

                //remember xPosition for every point
                if (view === 'short' && index === 0) {
                    this.chartConfig.xPositions.push({
                        date: dates[idx].short,
                        xPosition: x,
                    });
                }
            });

            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
        };

        columns.forEach(draw);
    }

    drawHorizontalLines() {
        const { ctx } = this;
        const { countY, stepY, y0, font } = this.chartConfig;
        const { width, height } = this.canvasConfig;
        const color = '#9aa6ae';
        const linesCount = 5;
        const step = Math.ceil( countY / linesCount);

        //initialize horizontal lines array
        let lines = new Array(linesCount).fill(step);

        //set lines array
        lines.map( (step, idx) => {
            lines[idx] = step * idx
        });

        lines.forEach((step, idx) => {
            ctx.beginPath();
            ctx.fillStyle = color;

            const yPosition = y0 + (height - stepY * step - y0);
            ctx.moveTo(0, yPosition);
            ctx.lineTo(width, yPosition);

            ctx.font = font;
            ctx.fillText(Math.round(step), 3, yPosition - 10);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
        });
    }

    drawDateCoords() {
        const { xPositions, datesPerLine, font  } = this.chartConfig;
        const { height } = this.canvas;
        const { ctx } = this;
        let cuttingCount = Math.round(xPositions.length / datesPerLine);
        const datesPositions = xPositions.filter((i,idx)=>{
            return !(idx % cuttingCount);
        });

        datesPositions.forEach((position, idx) => {

            const color = '#9da8af';

            ctx.beginPath();
            ctx.fillStyle = color;

            ctx.font = font;

            ctx.fillText(position.date, position.xPosition, height);

            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
        });
    }

    clearChart() {
        this.ctx.clearRect(0, 0, this.canvas.width, this. canvas.height);
        this.chartConfig.xPositions = [];
    }

    setScreenOptions() {
        this.chartConfig.screenWidth = screen.width;
        this.chartConfig.isMobile = screen.width <= 520;
        const { isMobile } = this.chartConfig;
        this.chartConfig.font = isMobile ? "300 25px sans-serif" : "100 20px sans-serif";
        this.chartConfig.datesPerLine = isMobile ? 6 : 8;

        this.canvasConfig = {
            width: isMobile ? 600 : 1800,
            height: isMobile ? 500 : 500,
        };

        this.canvas.width = this.canvasConfig.width;
        this.canvas.height = this.canvasConfig.height + 30;
        document.addEventListener('resize', this.setScreenOptions);
    }

    onCanvasClick(e) {
        const { pageX } = e;
        const { left, width } = this.canvas.getBoundingClientRect();

        const y0 = 0;
        const height = 500;
        const resolution = this.canvas.width / width;
        const x0 = (pageX - left) * resolution;

        const lineData = this.ctx.getImageData(x0, y0, 1, height)
        let colors = [];

        const { columns, stepY } = this.chartConfig;

        const originalColorsInRgb = columns.map((column, idx) => {
            const rgbColor = hexToRgb(column.color);
            return {
                ...column,
                rgbColor,
            }
        });

        lineData.data.map((color, idx)=>{
            if (color) {
                let colorPosition = idx % 4;
                let startColorPoint = idx - colorPosition;

                let endColorPoint = startColorPoint + 4;
                const rgbaArray = lineData.data.slice(startColorPoint, endColorPoint);

                const rgb = {
                    r: rgbaArray[0],
                    g: rgbaArray[1],
                    b: rgbaArray[2],
                    yPosition: startColorPoint / 4,
                };

                originalColorsInRgb.forEach((column, idx) => {
                    const { rgbColor } = column;
                    for (const key in rgbColor) {
                        const diff = Math.abs(rgbColor[key]  - rgb[key]);
                        if (diff > 0.03 * rgbColor[key]) {
                            return;
                        }
                    }

                    const dotColor = {
                      yPosition: rgb.yPosition,
                      name: column.name,
                      color: column.color,
                    };
                    colors.push(dotColor)
                });
            }
        });

        const tooltipInfo = getTooltipInfo(colors, columns, stepY, y0, height);

        this.chartConfig.tooltipInfo = {
            yPoints: tooltipInfo,
            x0,
        };

        this.clearChart();
        this.drawShort(this.chartConfig.data, this.chartConfig.columns[0].start,  --this.chartConfig.columns[0].end);//TODO fix
        this.drawTooltip(pageX);
        document.addEventListener('mousedown', this.clickOutside.bind(this));
    }

    clickOutside(event) {
        if (event.target !== this.canvas) {
            this.chartConfig.tooltipInfo.node.style.display = 'none';
            this.drawShort(this.chartConfig.data, this.chartConfig.columns[0].start,  --this.chartConfig.columns[0].end); //TODO fix

        }
    }

    drawTooltip(pageX) {
        const { ctx } = this;
        const { tooltipInfo, xPositions, dates } = this.chartConfig;
        const { x0, yPoints } = tooltipInfo;

        let formatDate = '';

        xPositions.map((xPos, idx) => {
            if (xPos.xPosition <= x0 && xPositions[idx + 1].xPosition >= x0) {
                const date = new Date(dates[idx].ms);
                const options = { weekday: 'short', month: 'short', day: 'numeric' };

                formatDate = date.toLocaleDateString('en-US', options);;
            }
        });

        const y0 = 150;
        const height = 500;

        ctx.beginPath();
        ctx.moveTo(x0, y0);

        ctx.lineTo(x0, height);
        ctx.strokeStyle = 'rgba(223, 230, 235, 0.5)';
        ctx.lineWidth = 3;
        ctx.stroke();

        const tooltip = document.querySelector('.tooltip');
        const columns = tooltip.querySelector('.columns');
        this.chartConfig.tooltipInfo.node = tooltip;
        this.chartConfig.tooltipInfo.date = formatDate;
        tooltip.style.display = 'flex';
        tooltip.style.left = pageX + 'px';
        tooltip.querySelector('.date').textContent = formatDate;

        columns.innerHTML = null;
        for (const key in yPoints) {
            const column = document.createElement('div');
            const spanValue = document.createElement('span');
            const spanName = document.createElement('span');
            spanValue.textContent = yPoints[key].yPosition;
            spanName.textContent = yPoints[key].name;
            column.classList.add('column');
            column.style.color = yPoints[key].color;
            column.appendChild(spanValue);
            column.appendChild(spanName);
            console.log(`column`,column);

            columns.appendChild(column);
        }

        // tooltip.appendChild()
    }
}

module.exports = Chart;