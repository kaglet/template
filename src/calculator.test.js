const calculator = require('./calculator');

test('Exists', () =>
    expect(calculator).toBeDefined()
);

test('Add, multiply, divide, subtract functions exist', () => {
    expect(calculator).toHaveProperty('add');
    expect(calculator).toHaveProperty('multiply');
    expect(calculator).toHaveProperty('subtract');
    expect(calculator).toHaveProperty('divide');
}
)

test('Add', () =>
    expect(calculator.add(2, 15)).toBe(17)
);

test('Subtract', () =>
    expect(calculator.subtract(2, 15)).toBe(-13)
);

test('Multiply', () =>
    expect(calculator.multiply(2, 15)).toBe(30)
);

test('Divide', () =>
    expect(calculator.divide(2, 15)).toBeCloseTo(2 / 15)
);


