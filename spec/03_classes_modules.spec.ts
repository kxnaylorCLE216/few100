// import { Employee } from './hr/employee';
import { Employee, Retiree, Contractor } from './hr';
import taco from './utils'

describe('classes and modules', () => {

    it('creating an instance of a class', () => {

        const bob = new Employee('Bob', 'Smith');

        expect(bob.firstName).toBe('Bob');

        expect(bob.lastName).toBe('Smith');

        bob.firstName = 'Robert';

        expect(bob.firstName).toBe('Robert');

        expect(bob.salary).toBe(100_000);

        // bob.salary = 200_00 // Can't do it! It is read-only!

        bob.giveRaise(1000);
        expect(bob.salary).toBe(101_000);
    });


});