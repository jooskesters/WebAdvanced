import User from "../../../src/js/users/User";

describe('constructor',
    () => {
        it('should throw an error when name parameter is too short',
            () => {
                expect(() => {
                    new User("m");
                }).toThrow(Error)
            });
        it('should throw an error when name parameter is an integer',
            () => {
                expect(() => {
                    new User(1);
                }).toThrow(Error)
            });
    });

test('toString returns the correct value',
    () => {
        let user = new User("geert");
        let returnedString = user.toString();
        expect(returnedString).toBe("(geert)");
    });