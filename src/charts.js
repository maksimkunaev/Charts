class Chart {
    canvas = null;

    canvasConfig = {
        width: 1800,
        height: 500,
    };

    chartConfig = {
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
    };

    constructor(ref, data) {
        const { width, height } = this.canvasConfig;

        this.canvas = document.getElementById(ref);
        this.canvas.width = width;
        this.canvas.height = height + 30;
        this.ctx = this.canvas.getContext("2d");

        this.chartConfig.data = data;
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
                let date = new Date(ms);

                const options = {
                    month: 'short',
                    day: 'numeric',
                };

                return date.toLocaleString("en-US", options)

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
                        date: dates[idx],
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
        const { countY, stepY, y0, columns } = this.chartConfig;
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

            ctx.font = "200 20px sans-serif";
            ctx.fillText(Math.round(step), 3, yPosition - 10);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
        });
    }

    drawDateCoords() {
        const { xPositions, y0   } = this.chartConfig;
        const { height } = this.canvas;
        const { ctx } = this;

        let cuttingCount = Math.round(xPositions.length / 8);

        const datesPositions = xPositions.filter((i,idx)=>{
            return !(idx % cuttingCount);
        });

        datesPositions.forEach((position, idx) => {

            const color = '#9da8af';

            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.font = "100 20px sans-serif";

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
}

module.exports = Chart;