const calculator = require('./calculator')

describe('test calculator', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('divide 2 % 2 to equal 1', () => {
    expect(calculator.divide(2, 2)).toBe(1)
  })
});