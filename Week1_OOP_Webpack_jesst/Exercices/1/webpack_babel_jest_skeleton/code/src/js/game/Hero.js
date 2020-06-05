'use strict'

import Point from "../drawing/Point";
import WereldObject from "./WereldObject";

export default class Hero extends WereldObject {
    constructor(location) {
        if (!location instanceof Point) {
            throw new Error("p1 or p2 is not a Point")
        } else {
            super(location);
        }
    }

    moveDown(){
        this._location.setY(this._location.getY() - 1)
    }
    moveUp(){
        this._location.setY(this._location.getY() + 1)
    }
    moveLeft(){
        this._location.setX(this._location.getX() - 1)
    }
    moveRight(){
        this._location.setX(this._location.getX() + 1)
    }
}
