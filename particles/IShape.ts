module Particles {
    
    export interface IShape {
        draw(): void;
        _X: number;
        _Y: number;
        _color: string;
    }

}