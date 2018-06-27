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
        Object.defineProperty(Circle.prototype, "positionX", {
            set: function (v) {
                this._positionX = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Circle.prototype, "positionY", {
            set: function (v) {
                this._positionY = v;
            },
            enumerable: true,
            configurable: true
        });
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
    var App = /** @class */ (function () {
        function App(_amout, _canvas, _box) {
            this._amout = _amout;
            this._canvas = _canvas;
            this._box = _box;
            this._context = this._canvas.getContext('2d');
        }
        App.prototype.init = function () {
            var boxWidth = this._box.clientWidth;
            var boxHeight = this._box.clientHeight;
            this._rectangle = new Shapes.Rectangle(this._context, boxWidth, boxHeight, '#000', .1);
            this._particles = this.createParticles(this._amout, boxWidth, boxHeight, this._context);
            this._canvas.width = boxWidth;
            this._canvas.height = boxHeight;
            this.animation(this._rectangle, this._particles);
        };
        App.prototype.reposition = function () {
            var width = this._box.clientWidth;
            var height = this._box.clientHeight;
            this._canvas.width = width;
            this._canvas.height = height;
            this._rectangle.width = width;
            this._rectangle.height = height;
            this._particles.map(function (p) {
                p.positionX = Math.random() * width;
                p.positionY = Math.random() * height;
                p.draw();
            });
        };
        App.prototype.animation = function (rectangle, particles) {
            window.setInterval(function () {
                rectangle.draw();
                particles.map(function (p) {
                    var X = (Math.random() * 2) - 1;
                    var Y = (Math.random() * 2) - 1;
                    p.move(X, Y);
                    p.draw();
                });
            }, 33);
        };
        App.prototype.createParticles = function (amout, boxWidth, boxHeight, context) {
            var particles = [];
            for (var i = 0; i < amout; i++) {
                var X = Math.random() * boxWidth;
                var Y = Math.random() * boxHeight;
                var r = Math.floor(Math.random() * 255);
                var g = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                var size = Math.random() * 5;
                particles.push(new Shapes.Circle(context, X, Y, size, "rgb(" + r + ", " + g + ", " + b + ")", .5));
            }
            return particles;
        };
        return App;
    }());
    Particles.App = App;
})(Particles || (Particles = {}));
/// <reference path="App.ts" />
var Particles;
(function (Particles) {
    window.addEventListener('load', function () {
        var app = new Particles.App(2000, document.getElementById('particle'), document.getElementById('box'));
        app.init();
        window.addEventListener('resize', function () { return app.reposition(); });
    });
})(Particles || (Particles = {}));
