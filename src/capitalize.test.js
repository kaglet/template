const capitalize = require('./capitalize');

test('Single character', () => {
    expect(capitalize('g')).toBe('G');
});

test('Many characters', () => {
    expect(capitalize('foot')).toBe('Foot');
});
