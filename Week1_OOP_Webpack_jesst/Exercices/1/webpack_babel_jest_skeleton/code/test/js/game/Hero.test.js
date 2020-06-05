import Point from '../../../src/js/drawing/Point';
import Hero from '../../../src/js/game/Hero';

describe('constructor',
    () => {
        it('should throw an error if the x-axis does not increase with the amount of 1',
            () => {
                let hero = new Hero(new Point(5,6))
                hero.moveRight()
                expect(hero.getLocationX).toEqual(6)
            }
        )
        it('should throw an error if the x-axis does not decrease with the amount of 1',
            () => {
                let hero = new Hero(new Point(4,3))
                hero.moveLeft()
                expect(hero.getLocationX).toEqual(3)
            })
    }
);

