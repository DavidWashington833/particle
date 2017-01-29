var Particles;
(function (Particles) {
    /**
     * Game
     */
    var Rect = (function () {
        function Rect(canvas, ctx, W, H, color) {
            if (color === void 0) { color = '#000'; }
            this._W = W;
            this._H = H;
            this._canvas = canvas;
            this._ctx = ctx;
            this._color = color;
            this.resizeWindow(W, H);
        }
        Rect.prototype.resizeWindow = function (W, H) {
            this._W = W;
            this._H = H;
            this._canvas.width = W;
            this._canvas.height = H;
            this.draw();
        };
        Rect.prototype.draw = function () {
            this._ctx.globalAlpha = .5;
            this._ctx.fillStyle = this._color;
            this._ctx.fillRect(0, 0, this._W, this._H);
        };
        return Rect;
    }());
    Particles.Rect = Rect;
})(Particles || (Particles = {}));
/// <reference path="IShape.ts" />
var Particles;
(function (Particles) {
    var Particle = (function () {
        function Particle(ctx, X, Y, size, color) {
            if (color === void 0) { color = "#fff"; }
            this._ctx = ctx;
            this._X = X;
            this._Y = Y;
            this._color = color;
            this._size = size;
        }
        Particle.prototype.draw = function () {
            this._ctx.save();
            this._ctx.beginPath();
            this._ctx.globalAlpha = .5;
            this._ctx.fillStyle = this._color;
            this._ctx.translate(this._X, this._Y);
            this._ctx.arc(this._X, this._Y, this._size, 0, 2 * Math.PI);
            this._ctx.fill();
            this._ctx.closePath();
            this._ctx.restore();
        };
        Particle.prototype.move = function (X, Y) {
            this._X += X;
            this._Y += Y;
        };
        return Particle;
    }());
    Particles.Particle = Particle;
})(Particles || (Particles = {}));
/// <reference path="Rect.ts" />
/// <reference path="Particle.ts" />
var Particles;
(function (Particles) {
    var amout;
    var W;
    var H;
    var X;
    var Y;
    var size;
    var rect;
    var r;
    var g;
    var b;
    var particles = new Array();
    var canvas;
    var ctx;
    var father;
    window.addEventListener('load', function () {
        amout = 2000;
        father = document.getElementById("header");
        W = father.clientWidth;
        H = father.clientHeight;
        canvas = document.getElementById('particle');
        ctx = canvas.getContext('2d');
        rect = new Particles.Rect(canvas, ctx, W, H);
        for (var i = 0; i < amout; i++) {
            X = Math.round(Math.random() * W);
            Y = Math.round(Math.random() * H);
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            size = Math.random();
            particles.push(new Particles.Particle(ctx, X, Y, size, "rgb(" + r + ", " + g + ", " + b + ")"));
            console.log(particles[i].draw());
        }
        window.setInterval(function () {
            rect.draw();
            for (var i = 0; i < amout; i++) {
                X = (Math.random() * 2) - 1;
                Y = (Math.random() * 2) - 1;
                particles[i].move(X, Y);
                particles[i].draw();
            }
        }, 33);
    });
    window.addEventListener('resize', function () {
        W = father.clientWidth;
        H = father.clientHeight;
        rect.resizeWindow(W, H);
    });
})(Particles || (Particles = {}));