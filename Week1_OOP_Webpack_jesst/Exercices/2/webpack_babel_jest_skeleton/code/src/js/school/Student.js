"use strict";
import Course from './Course';
// naam: joos kesters
export default class Student{
    constructor(id) {
        if (isNaN(id)) {
            throw new Error("Parameter is not a number!")
        }
        else{
            this._id = id;
            this._courses = []
        }
    }

    addCourse(course){
        if (!course instanceof Course) {
            throw new Error("input variable is not of type course")
        }
        else{
            this._courses.push(course)
        }
    }

    calculateGrade(){
        let total = 0
        let completes = 0
        for (let i = 0; i < this._courses.length; i++){
            let course = this._courses[i]
            if (course.getCompleted){
                total += course.getGrade
                completes += 1
            }
        }
        if (completes === 0 ){
            throw new Error('there were no completed courses')
        }
        return total / completes
    }
}
