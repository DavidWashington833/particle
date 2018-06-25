var Shapes;
(function (Shapes) {
    var Rectangle = /** @class */ (function () {
        function Rectangle(_context, _width, _height, _color, _opacity) {
            this._context = _context;
            this._width = _width;
            this._height = _height;
            this._color = _color;
            this._opacity = _opacity;
        }
        Object.defineProperty(Rectangle.prototype, "width", {
            set: function (v) {
                this._width = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "height", {
            set: function (v) {
                this._height = v;
            },
            enumerable: true,
            configurable: true
        });
        Rectangle.prototype.draw = function () {
            this._context.globalAlpha = this._opacity;
            this._context.fillStyle = this._color;
            this._context.fillRect(0, 0, this._width, this._height);
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var Shapes;
(function (Shapes) {
    var Circle = /** @class */ (function () {
        function Circle(_context, _positionX, _positionY, _size, _color, _opacity) {
            this._context = _context;
            this._positionX = _positionX;
            this._positionY = _positionY;
            this._size = _size;
            this._color = _color;
            this._opacity = _opacity;
        }
        Circle.prototype.draw = function () {
            this._context.save();
            this._context.beginPath();
            this._context.translate(this._positionX, this._positionY);
            this._context.arc(this._positionX, this._positionY, this._size, 0, 2 * Math.PI);
            this._context.globalAlpha = this._opacity;
            this._context.fillStyle = this._color;
            this._context.fill();
            this._context.closePath();
            this._context.restore();
        };
        Circle.prototype.move = function (X, Y) {
            this._positionX += X;
            this._positionY += Y;
        };
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
/// <reference path="shapes/Rectangle.ts" />
/// <reference path="shapes/Circle.ts" />
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
        canvas.width = W;
        canvas.height = H;
        rect = new Shapes.Rectangle(ctx, W, H, '#000', .1);
        for (var i = 0; i < amout; i++) {
            X = Math.round(Math.random() * W);
            Y = Math.round(Math.random() * H);
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            size = Math.random();
            particles.push(new Shapes.Circle(ctx, X, Y, size, "rgb(" + r + ", " + g + ", " + b + ")", .5));
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
        var width = father.clientWidth;
        var height = father.clientHeight;
        canvas.width = width;
        canvas.height = height;
        rect.width = width;
        rect.height = height;
    });
})(Particles || (Particles = {}));
