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

