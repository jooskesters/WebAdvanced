"use strict";

import User from "../users/User";
import Item from "./Item";

export default class ShoppingCart {
    constructor(user) {
        if(!(user instanceof User)) {
            throw new Error("User has to be an object from the class User.");
        }

        this._user = user;
        this._items = [];
    }

    calculatePrice() {
        let sum = 0;

        for(let item of this._items) {
            sum += item.getPrice();
        }

        return sum;
    }

    addItem(item) {
        if(!(item instanceof Item)) {
            throw new Error("Param invalid");
        }
        this._items = item;
    }

    toString() {
        let itemsString = "";
        let teller = 1;

        for(let item of this._items) {
            itemsString += item.toString();

            if (teller !== this._items.length) {
                itemsString += `,`;
            }
            teller++;
        }

        return `${this._user.toString()} [${itemsString}]`;
    }
}
