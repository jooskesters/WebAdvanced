"use strict";

export default class Point{
	constructor(x,y){
  		if (isNaN(x) || isNaN(y)) {
    		throw new Error("Parameter is not a number!");
  		}
		this._x=x;
		this._y=y;
	}

	setX(x){
		this._x = x
	}

	setY(y){
		this._y = y
	}

	getX(){
		return this._x;
	}
	getY(){
		return this._y;
	}

    toString() {
        return `(${this.x},${this.y})`;
    }
}
