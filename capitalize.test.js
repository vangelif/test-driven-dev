const capitalizeString = require('./capitalize.js');

test('capitalize test', () => {
    const string = 'vangelis';
    const result = capitalizeString(string);
    expect(result).toBe('VANGELIS')
});