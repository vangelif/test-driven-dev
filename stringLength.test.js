const stringLength = require('./stringLength');

describe('stringLength', () => {
    test('return actual length', () => {
        expect(stringLength('vangelis')).toBe(8);
    });
    test('error message when there is no string', () => {
        expect(()=> {stringLength('');}).toThrow('String length is empty');
    });
    test('error message when string has more than ten characters', () => {
        expect(()=> {stringLength('helloworldandhellovangelis');}).toThrow('String length is too long');
    });
});