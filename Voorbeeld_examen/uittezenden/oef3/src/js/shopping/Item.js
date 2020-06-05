"use strict";
// naam: joos kesters

export default class Item {
    constructor(id, price) {
        this._id = id;
        this._price = price;
    }


    get price() {
        return this._price;
    }

    toString() {
        return `${this._id}_${this._price}`;
    }

}

