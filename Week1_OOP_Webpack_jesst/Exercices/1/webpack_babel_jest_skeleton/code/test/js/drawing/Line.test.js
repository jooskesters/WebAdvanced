import Point from '../../../src/js/drawing/Point';
import Line from '../../../src/js/drawing/Line';

describe('constructor',
    () => {
        it('should generate a Point-object for valid args',
            () => {
                let line = new Line(new Point(6,7), new Point(3,4));
                expect(line).toBeInstanceOf(Line)
                expect(line.getPoint1).toBeInstanceOf(Point)
                expect(line.getPoint2).toBeInstanceOf(Point)
            }
        )
    }
);

test('getPoint1 to return the correct value',
    () => {
        let line = new Line(new Point(5,6), new Point(7,8));
        let p1 = line.getPoint1;
        expect(p1).toEqual(new Point(5,6));
    });

test('getPoint2 to return the correct value',
    () => {
        let line = new Line(new Point(5,6), new Point(7,8));
        let p2 = line.getPoint2;
        expect(p2).toEqual(new Point(7,8));
    });


test('toString to return the correct value', () => {
    let line = new Line(new Point(5,6),new Point(6,7));
    let returnedString = line.toString();
    expect(returnedString).toEqual(`((5,6),(6,7))`);
});

