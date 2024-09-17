const caesarCipher = require('./caesar_cipher');

test('Single character', () => 
    expect('b', 2).toBe('d')
);

test('Many characters', () => 
    expect('abc', 3).toBe('def')
);

test('Uppercase', () => 
    expect('ABC').toBe('DEF')
);

test('Mixed case', () => 
    expect('AbC').toBe('DeF')
);

test('Non-letters', () => 
    expect('.:;+').toBe('.:;+')
);

test('Wrap around shift', () => {
    expect('xyz', 3, 'cba')
});

