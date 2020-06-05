'use strict'

import Point from "../drawing/Point";

export default class Line {
    constructor(location) {
        if (!location instanceof Point){
            throw new Error ("p1 or p2 is not a Point")
        }
        else{
            this._location = location;
        }
    }

    get getLocationX(){
        return this._location.getX();
    }
    get getLocationY(){
        return this._location.getY();
    }

    set setLocationX (x){
        this._location.setX(x)
    }

    set setLocationY (y){
        this._location.setY(y)
    }
}