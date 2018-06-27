namespace Shapes {

    export class Circle {

        constructor(
            private _context: CanvasRenderingContext2D,
            private _positionX: number,
            private _positionY: number,
            private _size: number,
            private _color: string,
            private _opacity: number
        ) { }

        public set positionX(v: number) {
            this._positionX = v;
        }

        public set positionY(v: number) {
            this._positionY = v;
        }

        public draw(): void {
            this._context.save();
            this._context.beginPath();
            this._context.translate(this._positionX, this._positionY);
            this._context.arc(this._positionX, this._positionY, this._size, 0, 2 * Math.PI);
            this._context.globalAlpha = this._opacity;
            this._context.fillStyle = this._color;
            this._context.fill();
            this._context.closePath();
            this._context.restore();
        }

        public move(X: number, Y: number) {
            this._positionX += X;
            this._positionY += Y;
        }

    }

}