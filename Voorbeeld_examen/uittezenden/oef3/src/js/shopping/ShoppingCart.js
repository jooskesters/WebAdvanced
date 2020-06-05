"use strict";
// naam: joos kesters
import User from '../users/User';
import Item from '../shopping/Item';

export default class ShoppingCart {
    constructor(user) {
        if (!user instanceof User)
            throw new Error("name was not a string or has a to short length")
        else {
            this._user = user;
            this._items = [];

        }
    }

    addItem(item){
        if (!item instanceof Item){
            throw new Error("the item was not of type item")
        }
        else{
            this._items.push(item);
        }
    }

    get calculatePrice() {
        let price = 0;
        for (let i = 0; i < this._items.length; i++){
            price += this._items[i].price;
        }
        return price;
    }

    toString() {
        let itemsString = ''
        for (let i = 0; i < this._items.length; i++){
            if (i == this._items.length - 1)
                itemsString += this._items[i].toString();
            else
                itemsString += this._items[i].toString() + ",";

        }

        return `(${this._user.toString()})[${itemsString}]`;
    }

}

