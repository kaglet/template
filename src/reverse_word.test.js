const reverseWord = require('./reverse_word');

test('No characters', () => 
    expect(reverseWord('')).toBe('')
)

test('Single character', () => 
    expect(reverseWord('a')).toBe('a')
)

test('Many characters', () => 
    expect(reverseWord('House')).toBe('esuoH')
)
