const validator = require('./calculator-validator')

describe('test validator', () => {
  test('2nd operand is not zero should be passed', () => {
    expect(validator.validateDivision(1)).toBe(undefined);
  })
  test('2nd operand is zero should be error', () => {
    expect(validator.validateDivision(0)).toStrictEqual({
      status: 400,
      message: 'divide by zero error'
    })
  })
});