/// <reference path="shapes/Rectangle.ts" />
/// <reference path="shapes/Circle.ts" />

namespace Particles {
    
    export class App {
        private _context: CanvasRenderingContext2D;
        private _rectangle: Shapes.Rectangle;
        private _particles: Array<Shapes.Circle>;
        
        constructor(
            private _amout: number,
            private _canvas: HTMLCanvasElement,
            private _box: HTMLElement
        ) {
            this._context = this._canvas.getContext('2d');
        }
        
        public init() {
            const boxWidth = this._box.clientWidth;
            const boxHeight = this._box.clientHeight;
            this._rectangle = new Shapes.Rectangle(this._context, boxWidth, boxHeight, '#000', .1);
            this._particles = this.createParticles(this._amout, boxWidth, boxHeight, this._context);
        
            this._canvas.width = boxWidth;
            this._canvas.height = boxHeight;
        
            this.animation(this._rectangle, this._particles);
        }

        public reposition() {
            const width = this._box.clientWidth;
            const height = this._box.clientHeight;
        
            this._canvas.width = width;
            this._canvas.height = height;
            this._rectangle.width = width;
            this._rectangle.height = height;

            this._particles.map((p) => {
                p.positionX = Math.random() * width;
                p.positionY = Math.random() * height;
                p.draw();
            });
        }
        
        private animation(rectangle: Shapes.Rectangle, particles: Shapes.Circle[]) {
            window.setInterval(() => {
                rectangle.draw();
                particles.map((p) => {
                    const X = (Math.random() * 2) - 1;
                    const Y = (Math.random() * 2) - 1;
                    p.move(X, Y);
                    p.draw();
                });
            }, 33);
        }
        
        private createParticles(amout: number, boxWidth: number, boxHeight: number, context: CanvasRenderingContext2D): Array<Shapes.Circle> {
            const particles: Array<Shapes.Circle> = [];
        
            for (let i = 0; i < amout; i++) {
                let X = Math.random() * boxWidth;
                let Y = Math.random() * boxHeight;
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                let size = Math.random() * 5;
                particles.push(new Shapes.Circle(context, X, Y, size, `rgb(${r}, ${g}, ${b})`, .5));
            }
        
            return particles;
        }
    }

}