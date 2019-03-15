class Thumb {
    thumb = null;
    parent = null;

    data = [];

    thumbConfig = {
        width: 15,
        left: 0,
        right: 15,
        stepY: 0,
    };

    renderMethod = () => {};

    constructor(config, data) {
        const { thumb, parent, method } = config;

        this.thumb = document.querySelector(thumb);
        this.parent = document.querySelector(parent);
        this.data = data.columns[0];

        this.renderMethod = method;

        this.setConfig(config);
        this.setStyle();
        this.makeDraggable();
    }

    onMouseDown(event) {
        event.preventDefault();
        const thumbCoords = this.getCoords(this.thumb);
        const parentCoords = this.getCoords(this.parent);
        const shiftX = event.pageX - thumbCoords.left;
        const moveAt = (event) => {
            let newLeft = event.pageX - shiftX - parentCoords.left;
            if (newLeft < 0) {
                newLeft = 0;
            }

            const rightEdge = this.parent.offsetWidth - this.thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            this.thumb.style.left = newLeft + 'px';

            const left = this.thumb.style.left.split('px')[0];
            const right = newLeft + this.thumb.offsetWidth;
            this.thumbConfig.left = left;
            this.thumbConfig.right = right;
            this.setStyle();

            const thumbLeft = event.pageX - shiftX;
            this.renderMethod(thumbLeft / this.thumbConfig.stepY, right / this.thumbConfig.stepY)
        };
        moveAt(event);

        this.thumb.style.zIndex = '1000';

        const onMouseMove = event => {
            event.preventDefault();

            moveAt(event);
        };

        const onMouseUp = event => {
            event.preventDefault();

            this.thumb.removeEventListener('mousemove',onMouseMove);
            this.thumb.removeEventListener('mouseup',onMouseUp);
        };

        this.thumb.addEventListener('mousemove',onMouseMove);
        this.thumb.addEventListener('mouseup',onMouseUp)
    }

    setConfig({ longChart }) {
        const parentCoords = this.getCoords(this.parent);
        const dayWidth = parentCoords.width / this.data.length < 15 ? 15 : parentCoords.width / this.data.length;
        const thumbWidth =  9 * dayWidth;

        this.thumbConfig = {
            width: thumbWidth,
            left: 0,
            right: thumbWidth,
            stepY: longChart.chartConfig.stepY,
        };
    }

    getCoords(elem) {
        const box = elem.getBoundingClientRect();
        return {
            top: box.top,
            left: box.left,
            right: box.right,
            width: box.width,
        };
    }

    setStyle() {
        const { width, left, right } = this.thumbConfig;
        this.thumb.style.width = width + 'px';
        this.parent.style.backgroundImage = `linear-gradient(90deg, rgba(179, 179, 179, 0.25) ${left}px, #ffffff00 ${left}px, #ffffff00 ${right}px,rgba(179, 179, 179, 0.25) ${right}px)`;
    }

    makeDraggable() {
        this.thumb.ondragstart = function() {
            return false;
        };
        this.thumb.addEventListener('mousedown',this.onMouseDown.bind(this));
    }
}

module.exports = Thumb;
