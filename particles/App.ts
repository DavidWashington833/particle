/// <reference path="shapes/Rectangle.ts" />
/// <reference path="shapes/Circle.ts" />


module Particles {

    let amout       : number;
    let W           : number;
    let H           : number;
    let X           : number;
    let Y           : number;
    let size        : number;
    let rect        : Rectangle;
    let r           : number;
    let g           : number;
    let b           : number;
    var particles   : Array<Circle> = new Array<Circle>();
    let canvas      : HTMLCanvasElement;
    let ctx         : CanvasRenderingContext2D;
    let father      : HTMLElement;

    window.addEventListener('load', () => {
        
        amout = 2000;
        father = document.getElementById("header");
        W = father.clientWidth;
        H = father.clientHeight;
        canvas = <HTMLCanvasElement>document.getElementById('particle');
        ctx = canvas.getContext('2d');

        rect = new Rectangle(canvas, ctx, W, H);

        for(let i : number = 0; i < amout; i++) {
            X = Math.round(Math.random() * W);
            Y = Math.round(Math.random() * H);
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            size = Math.random();
            particles.push(new Circle(ctx, X, Y, size, `rgb(${r}, ${g}, ${b})`));
            console.log(particles[i].draw());
        }

        window.setInterval(() => {
            rect.draw();
            for(let i : number = 0; i < amout; i++) {
                X = (Math.random() * 2) - 1;
                Y = (Math.random() * 2) - 1;
                particles[i].move(X, Y);
                particles[i].draw();
            }
        }, 33);

    });

    window.addEventListener('resize', () => {
        
        W = father.clientWidth;
        H = father.clientHeight;

        rect.resizeWindow(W, H);
        
    });

}