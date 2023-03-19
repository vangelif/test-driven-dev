const Calculator = require('./calculator');

describe('Calculator', () => {
    const calculator = new Calculator(3,1);
    test('sumation test', () => {
        expect(calculator.add()).toBe(4)
    });
    test('subtraction test', () => {
        expect(calculator.subtract()).toBe(2)
    });
    test('multiplication test', () => {
        expect(calculator.multiply()).toBe(3)
    });
    test('division test', () => {
        expect(calculator.divide()).toBe(3)
    });
});