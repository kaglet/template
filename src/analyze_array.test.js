const analyzeArray = require('./analyze_array')

test('Empty array', () => 
    expect(analyzeArray([])).toStrictEqual({
        average: undefined,    
        min: undefined,
        max: undefined,
        length: 0
    })
);

test('Single element array', () => 
    expect(analyzeArray([76])).toStrictEqual({
        average: 76,    
        min: 76,
        max: 76,
        length: 1
    })
);

test('Multi element array', () => 
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,    
        min: 1,
        max: 8,
        length: 6
    })
);

test('Array with holes', () => 
    expect(() => analyzeArray([1, 8, , 3, , 4, 2, , 6])).toThrow(new Error("Array has holes"))
);

test('Array with non-numbers', () => 
    expect(() => analyzeArray([8, 3, "hi", 12])).toThrow("Array has non-numbers")
);
