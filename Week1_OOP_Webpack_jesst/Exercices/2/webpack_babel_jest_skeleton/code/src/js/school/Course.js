"use strict";
// naam: joos kesters
export default class Course {
    constructor(id) {
        if (isNaN(id)) {
            throw new Error("Parameter is not a number!")
        }
        else{
            this._id = id;
            this._grade = 0;
            this._completed = false;
        }
    }

    set setId (id){
        this._id = id
    }

    setGrade (grade){
        this._grade = grade
    }

    setCompleted (completed){
        this._completed = completed
    }

    get getId (){
        return this._id;
    }
    get getGrade (){
        return this._grade;
    }
    get getCompleted(){
        return this._completed;
    }
}
