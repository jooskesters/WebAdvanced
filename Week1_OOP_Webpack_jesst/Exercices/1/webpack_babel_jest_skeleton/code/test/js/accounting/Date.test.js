import Date from '../../../src/js/accounting/Date';

describe('constructor',
    () => {
        it("should throw an error if the toString doesn't match",
            () => {
                let date = new Date(1,2,2020);
                expect(date.toString()).toEqual("(1/2/2020)")
            }
        )
        it("should throw an error if the toStringMonth doesn't match",
            () => {
                let date = new Date(1,2,2020);
                expect(date.toStringMonth()).toEqual("(1/feb/2020)")
            }
        )
    }
);

