describe('functions', () => {

    it('two kinds of functions', () => {
        // Named Functions
        expect(add(2, 2)).toBe(4); // only ones that can be forward-referenced
        function add(a: number, b: number): number {
            return a + b;
        }

        // Anonymous Functions
        const subtract: MathOp = function (a: number, b: number): number {
            return a - b;
        }
        expect(subtract(10, 2)).toBe(8);
        const multiply: MathOp = (a: number, b: number): number => a * b;
        expect(multiply(3, 3)).toBe(9);


        const divide = (a: number, b: number): number => {
            if (b === 0) {
                throw new Error('Are you trying to create a black hole??');
            }
            return a / b;
        }

        const formatName = (first: string, last: string): { fullName: string } => ({ fullName: `${last}, ${first}` });
        const name = formatName('Han', 'Solo');
        expect(name.fullName).toBe('Solo, Han');

        type MathOp = (a: number, b: number) => number;
        function doIt(x: number, b: number, f: MathOp): number {
            return f(x * 2, b * 2);
        }

        expect(doIt(2, 2, add)).toBe(8);
    });
    describe('arguments to functions', () => {

        it('optional, default, and rest params', () => {
            function add(a: number = 5, b: number = 10, ...allTheRest: number[]) {
                const firstTwo = a + b;
                return allTheRest.reduce((s, n) => s + n, firstTwo);
            }
            expect(add(2, 2)).toBe(4);
            expect(add(2)).toBe(12);
            expect(add()).toBe(15);
            expect(add(undefined, 5)).toBe(10);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
    });
});

describe('higher order functions', () => {

    it('basic way to solve the problem', () => {
        function tagMaker(tag: string, content: string): string {
            return `<${tag}>${content}</${tag}>`;
        }

        expect(tagMaker('h1', 'Hello')).toBe('<h1>Hello</h1>');
        expect(tagMaker('h1', 'Goodbye')).toBe('<h1>Goodbye</h1>');
        expect(tagMaker('p', 'some content')).toBe('<p>some content</p>');
    });
    it('an oop approach', () => {
        class TagMaker {

            constructor(private tag: string) { }

            make(content: string) {
                return `<${this.tag}>${content}</${this.tag}>`;
            }
        }

        const h1Maker = new TagMaker('h1');
        const pMaker = new TagMaker('p');

        expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
        expect(h1Maker.make('Goodbye')).toBe('<h1>Goodbye</h1>');
        expect(pMaker.make('some content')).toBe('<p>some content</p>');
    });
    it('functional style', () => {
        function tagMaker(tag: string): (content: string) => string {
            return (content) => `<${tag}>${content}</${tag}>`
        }

        const h1Maker = tagMaker('h1');
        const pMaker = tagMaker('p');

        expect(h1Maker('Hello')).toBe('<h1>Hello</h1>');
        expect(h1Maker('Goodbye')).toBe('<h1>Goodbye</h1>');
        expect(pMaker('some content')).toBe('<p>some content</p>');
    });
});

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('visiting each element in an array', () => {
        numbers.forEach((e) => console.log(e));
        numbers.forEach((element, index, collection) => console.log(element, index, collection)) // Eich
    });

    describe('methods that create new arrays', () => {
        it('has a filter', () => {
            // where
            const evens = numbers.filter(n => n % 2 === 0); // filter returns every element that returns true from the function.

            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

            expect(numbers.filter(() => true)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            expect(numbers.filter(() => false)).toEqual([]);

        });
    });

});