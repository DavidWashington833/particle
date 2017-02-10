module Particles {
    
    export interface IShape {
        _positionX  : number;
        _positionY  : number;
        _color      : string;
        draw()      : void;
    }

}