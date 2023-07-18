const { stringLength, reverseString, calculator, capitalize } = require('./index');

test('valid string length', () => {
  const result = stringLength('Hello');
  expect(result).toBe(5);
});

test('long string', () => {
  const result = stringLength('This is a very long string.');
  expect(result).toBe('Error');
});

test('reverse string', () => {
  const result = reverseString('Anshuman');
  expect(result).toBe('namuhsnA');
});

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    // Create a new instance of the Calculator class before each test
    calc = new calculator(5, 2);
  });

  test('add method', () => {
    const result = calc.add();
    expect(result).toBe(7);
  });

  test('subtract method', () => {
    const result = calc.subtract();
    expect(result).toBe(3);
  });

  test('divide method', () => {
    const result1 = calc.divide();
    expect(result1).toBe(2.5);

    // Test divide by zero case
    const calc2 = new calculator(10, 0);
    const result2 = calc2.divide();
    expect(result2).toBe('Impossible');
  });

  test('multiply method', () => {
    const result = calc.multiply();
    expect(result).toBe(10);
  });
});


test('capitalize function capitalizes the first character of a string', () => {
    const result = capitalize('hello');
    expect(result).toBe('Hello');
  });
