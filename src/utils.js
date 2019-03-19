function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

function getTooltipInfo(colors, columns, stepY, y0, height) {
    const tooltipInfo = {};

    colors.forEach(color=>{
        columns.forEach(col => {
            if (!tooltipInfo[col.name]) {
                tooltipInfo[col.name] = [];
            }
            if (col.name === color.name) {
                tooltipInfo[col.name].push(color);
            }
        })
    });

    const resultInfo = {};

    for (const key in tooltipInfo) {
        const pointsArray = tooltipInfo[key];
        if (!pointsArray.length) continue;
        const result = tooltipInfo[key].reduce((sum, current) => {
            return sum + current.yPosition;
        },0);

        //Y position arithmetic average of all points crossing the vertical line
        const yPos = result / pointsArray.length;

        let y = y0 + (height - y0 - yPos);

        const point = Math.round(y/stepY);


        resultInfo[key] = {
            name: key,
            yPosition: point,
            color: pointsArray[0].color,
        };
    }

    return resultInfo;
}

function formatDate(date) {
    const monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();

    return {
        short: monthNames[monthIndex] + ' ' +  day,
        ms: date,
    };
}

module.exports.getTooltipInfo = getTooltipInfo;
module.exports.hexToRgb = hexToRgb;
module.exports.formatDate = formatDate;