"use strict";
// naam: joos kesters

export default class User{

    constructor(name) {
        if (!typeof(name) == "string" || name.length < 3)
            throw new Error ("name was not a string or has a to short length")
        else{
            this._name = name;
        }
    }

    toString (){
        return `(${this._name})`;
    }
}
