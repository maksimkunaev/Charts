class Chart {
    canvas = null;

    canvasConfig = {
        width: 1200,
        height: 500,
    };

    chartConfig = {
        columns: [],
        x0: 30,
        y0: 30,
        stepX: 10,
        stepY: 10,
    };

    constructor(ref, data) {
        const { width, height } = this.canvasConfig;

        this.canvas = document.getElementById(ref);
        this.canvas.width = width;
        this.canvas.height = height + 30;
        this.ctx = this.canvas.getContext("2d");

        // this.setConfig(data);
    }

    setConfig(data, startDate, endDate, view) {
        const { columns, colors } = data;

        const { width, height } = this.canvasConfig;
        let maxX = 0;
        let maxY = 0;

        this.chartConfig.columns = [];
        columns.forEach((column, idx) => {

            if (idx === 0) return;

            const start = startDate ? startDate : -11;
            const end = endDate ? endDate : column.length;

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
        });

        this.chartConfig.stepY =(height / maxY);
        this.chartConfig.stepX =(width / maxX );
    }

    drawShort(data, startDate, endDate) {
        this.setConfig(data, startDate, endDate, 'short');
        this.drawChart()
    }

    drawLong(data, startDate, endDate) {
        this.setConfig(data, startDate, endDate, 'long');
        this.drawChart()
    }

    drawChart() {
        const { height } = this.canvasConfig;
        const { y0, stepX, stepY, columns } = this.chartConfig;

        const { ctx } = this;

        // if (!startDate) return;
        this.clearChart();

        columns.forEach((column, idx) => {
            this.ctx.beginPath();

            const { data, color } = column;

            data.forEach((point, idx) => {
                const x = idx * stepX;
                const y = y0 + (height - point * stepY);
                // console.log(x,y);
                if (idx === 0)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            });

            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }

    clearChart() {
        this.ctx.clearRect(0, 0, this.canvas.width, this. canvas.height);
    }
}

module.exports = Chart;