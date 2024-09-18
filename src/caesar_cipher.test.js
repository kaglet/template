const caesarCipher = require('./caesar_cipher');

test('Single character', () => 
    expect(caesarCipher('b', 2)).toBe('d')
);

test('Many characters', () => 
    expect(caesarCipher('abc', 3)).toBe('def')
);

test('Uppercase', () => 
    expect(caesarCipher('ABC', 3)).toBe('DEF')
);

test('Mixed case', () => 
    expect(caesarCipher('AbC', 3)).toBe('DeF')
);

test('Non-letters', () => 
    expect(caesarCipher('.:;+', 3)).toBe('.:;+')
);

test('Wrap around shift', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
});


