namespace Shapes {

    export class Rectangle {

        constructor(
            private _context: CanvasRenderingContext2D,
            private _width: number,
            private _height: number,
            private _color: string,
            private _opacity: number
        ) { }

        public set width(v: number) {
            this._width = v;
        }

        public set height(v: number) {
            this._height = v;
        }

        public draw(): void {
            this._context.globalAlpha = this._opacity;
            this._context.fillStyle = this._color;
            this._context.fillRect(0, 0, this._width, this._height);
        }

    }

}