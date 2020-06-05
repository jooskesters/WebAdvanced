"use strict";

export default class User {
    constructor(name) {
        if (typeof name != 'string' || name.length <= 3) {
            throw new Error("Name has to be a string-value larger than 3 characters!");
        }

        this._name = name;
    }

    toString() {
        return `(${this._name})`;
    }
}
