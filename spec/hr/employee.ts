export class Employee {

    private _salary = 100_000;

    constructor(public firstName: string, public lastName: string) { }

    get salary() {
        return this._salary;
    }

    // set salary(newVal: number) {
    //     this._salary = newVal;
    // }

    giveRaise(amount: number) {
        this._salary += amount;
    }
}