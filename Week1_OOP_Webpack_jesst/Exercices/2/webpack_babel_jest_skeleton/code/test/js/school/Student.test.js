// naam: joos kesters

import Course from '../../../src/js/school/Course';
import Student from '../../../src/js/school/Student';


describe('grade calculations',

    () => {
        it('should return true when the grade equals the expected grade',
            () => {
                let stud = new Student(1);
                let course = new Course(1);
                course.setGrade(12)
                course.setCompleted(true)
                stud.addCourse(course)
                expect(stud.calculateGrade()).toEqual(12)
                }
        )
        it('should throw an error when the student has no completed courses yet',
            () => {
                expect(() => {
                    let stud = new Student( 1);
                    stud.calculateGrade()
                }).toThrow(Error)
            })
    }
);