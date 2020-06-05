'use strict'

import Point from './Point';

export default class Line {
    constructor(p1, p2) {
        if (!p1 instanceof Point || !p2 instanceof Point)
            throw new Error ("p1 or p2 is not a Point")
        else{
            this._point1 = p1;
            this._point2 = p2;
        }

    }
    set setPoint1 (p1){
        this._point1 = p1
    }

    set setPoint2 (p2){
        this._point1 = p2
    }

    get getPoint1 (){
        return this._point1;
    }
    get getPoint2 (){
        return this._point2;
    }

    toString (){
        return `(${this._point1.toString()},${this._point2.toString()})`;
    }
}
