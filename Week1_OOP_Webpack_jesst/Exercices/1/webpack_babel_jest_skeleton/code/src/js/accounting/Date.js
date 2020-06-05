import WereldObject from "../game/WereldObject";
import Point from "../drawing/Point";

export default class Date {
    static get MONTHS(){
        return ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
    }

    getLongMonth(){
        return Date.MONTHS[this._month-1]
    }
    constructor(day, month, year) {
        if (isNaN(day) || (isNaN(month) || isNaN(year))) {
            throw new Error("day, month or year is not a number")
        } else {
            this._day = day
            this._month = month
            this._year = year
        }
    }

    set setDay (day){
        this._day = day
    }

    set setMonth (month){
        this._month = month
    }

    set setYear (year){
        this._year = year
    }

    get getDay (){
        return this._day;
    }
    get getMonth (){
        return this._month;
    }

    get getYear (){
        return this._year;
    }

    toString(){
        return `(${this._day}/${this._month}/${this._year})`
    }

    toStringMonth(){
        return `(${this._day}/${this.getLongMonth()}/${this._year})`
    }

    static make(day,month,year){
        if (isNaN(day) || (isNaN(month) || isNaN(year))) {
            throw new Error("day, month or year is not a number")
        } else {
            return new Date(day, month,year)
        }
    }
}
