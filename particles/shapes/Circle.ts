/// <reference path="IShape.ts" />

module Particles {

    export class Circle implements IShape {
        public _positionX: number;
        public _positionY: number;
        public _color: string;
        public _size: number;
        private _ctx : CanvasRenderingContext2D;

        constructor(ctx : CanvasRenderingContext2D, X : number, Y : number, size : number, color : string = "#fff") {
            this._ctx = ctx;
            this._positionX = X;
            this._positionY = Y;
            this._color = color;
            this._size = size;
        }

        public draw() : void {
            this._ctx.save();
            this._ctx.beginPath();
            this._ctx.globalAlpha = .5;
            this._ctx.fillStyle = this._color;
            this._ctx.translate(this._positionX, this._positionY);
            this._ctx.arc(this._positionX, this._positionY, this._size, 0, 2 * Math.PI);
            this._ctx.fill();
            this._ctx.closePath();
            this._ctx.restore();
        }

        public move(X : number, Y : number) {
            this._positionX += X;
            this._positionY += Y;
        }
    }
    
}