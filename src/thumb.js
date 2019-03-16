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
        console.log(`down`)
        event.preventDefault();
        const thumbCoords = this.getCoords(this.thumb);
        if (event.pageX < thumbCoords.left || event.pageX >= thumbCoords.right) {
            return; //Click on pseudo elements are not processed
        }
        const parentCoords = this.getCoords(this.parent);
        const shiftX = event.pageX - thumbCoords.left;

        let handlerFunction = () => {};
        let direction = '';
        let width = thumbCoords.width;

        const moveAt = event => {

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

            const from = Math.floor(( thumbLeft / parentCoords.width ) * this.data.length);
            const to = Math.ceil(( right / parentCoords.width ) * this.data.length);
            this.renderMethod(from <= 0 ? 1 : from, to) //TODO calc 0
        };

        let resize = event => {
            let newLeft = event.pageX - shiftX - parentCoords.left;

            const left = this.thumb.style.left.split('px')[0];

            const diffWidth = newLeft - left;
            if (direction === 'left') {
                const left = this.thumb.style.left.split('px')[0];
                const width = this.thumb.style.width.split('px')[0];
                this.thumbConfig.width = +width - diffWidth + 'px';
                this.thumb.style.width = +width - diffWidth + 'px';
                this.thumb.style.left = +left + diffWidth + 'px';
            } else if (direction === 'right') {
                this.setStyle();
                this.thumbConfig.width = width + diffWidth;
            } else {
            }


            const thumbLeft = event.pageX - shiftX;
            const right = newLeft + this.thumb.offsetWidth;
            const from = Math.floor(( thumbLeft / parentCoords.width ) * this.data.length);
            const to = Math.ceil(( right / parentCoords.width ) * this.data.length);
            this.renderMethod(from <= 0 ? 1 : from, to) //TODO calc 0
        };

        const border =  (this.thumb.offsetWidth - this.thumb.clientWidth) / 2;
        if (event.pageX >=thumbCoords.left && event.pageX <= (thumbCoords.left + border)) {
            handlerFunction = resize;
            direction = 'left';
        } else if (event.pageX >=thumbCoords.right - border && event.pageX <=thumbCoords.right) {
            handlerFunction = resize;
            direction = 'right';
        } else {
            handlerFunction = moveAt;
        }

        handlerFunction(event);
        this.thumb.style.zIndex = '1000';

        const onMouseMove = event => {
            event.preventDefault();

            handlerFunction(event);
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
    }

    makeDraggable() {
        this.thumb.ondragstart = function() {
            return false;
        };
        this.thumb.addEventListener('mousedown',this.onMouseDown.bind(this));
    }
}

module.exports = Thumb;
