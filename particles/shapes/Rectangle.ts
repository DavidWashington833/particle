module Particles {

    /**
     * Game
     */
    export class Rectangle {
        
        private _W : number;
        private _H : number;
        private _canvas : HTMLCanvasElement;
        private _ctx : CanvasRenderingContext2D;
        private _color : string;

        constructor(canvas : HTMLCanvasElement, ctx : CanvasRenderingContext2D, W : number, H : number, color : string = '#000') {
            this._W = W;
            this._H = H;
            this._canvas = canvas;
            this._ctx = ctx;
            this._color = color;
            this.resizeWindow(W, H);
        }

        public resizeWindow(W : number, H : number) : void {
            this._W = W;
            this._H = H;
            this._canvas.width = W;
            this._canvas.height = H;
            this.draw();
        }

        public draw() : void {
            this._ctx.globalAlpha = .5;
            this._ctx.fillStyle = this._color;
            this._ctx.fillRect(0, 0, this._W, this._H);
        }
        
    }

}