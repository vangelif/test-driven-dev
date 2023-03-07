const reverseString = require('./reverseString');

describe('Reverse String', () => {
    test('string is reversed', () => {
        expect(reverseString('vangelis')).toBe('silegnav');
    }); 
});