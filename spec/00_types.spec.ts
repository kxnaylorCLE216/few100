describe('declaring variables', () => {
    it('implictly typed variables', () => {
        let x = 10; // since I initialized to a number, it inferred that I want this to be a number data type.
        x = 10;
        // x = 'tacos'; // can't do this because it is a number.
    });
    it('union types', () => {
        let y: number;
        y = 13;
        y = 13.33;
        y = 123_123_123;
        y = 0xff; // hex, base 16
        y = 0o22; // octal, base 8
        y = 0b1010101; // binary

        let z: number | string;

        z = 12;

        z = 'Tacos';

    });
    it('has const keyword', () => {
        // you cannot reassign to that variable
        const PI = 3.14;

        // PI = 3;

        const friends = ['Sean', 'Amy', 'Chip'];
        friends[2] = 'Everett';
        expect(friends[2]).toBe('Everett');
        expect(friends).toEqual(['Sean', 'Amy', 'Everett']); // toEqual does deep equality.

        const movie = { title: 'Jaws', director: 'Spielberg' };
        movie.director = 'Steven Spielberg';


    });
    it('has a var keyword but it is evil and you should not use it or you are a bad person', () => {
        const age = 22;

        if (age > 21) {
            const message = 'Old Enough';
        } else {
            const message = 'Too Young';
        }

        expect(message).toBe('Old Enough');

    });
})

describe('strings', () => {
    it('declaring them', () => {
        const s1 = 'Hello, World';

        const s2 = 'Hello, World';

        expect(s1).toEqual(s2);

        const name = 'Bob';

        const salary = 123_000;

        const message1 = 'The name is ' + name + ' and the salary is ' + salary + ' Per Year';
        const message2 = `The name is ${name} and the salary is ${salary} Per Year`;

        expect(message1).toEqual(message2);

        const story = `My life.
            It was a dark and stormy night.
            I got borned.

            The End`;

    });

    describe('array litterals', () => {
        it('declaring them', () => {
            const favoriteNumbers: number[] = [];
            favoriteNumbers[0] = 12;
            // let stuff : (number | string ) [] = [];
            const stuff: Array<number | string> = [];

            stuff[0] = 12;

            stuff[1] = 'Pizza';



        });


    });


});
