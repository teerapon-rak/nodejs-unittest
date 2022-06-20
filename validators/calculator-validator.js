const validateDivision = (operand) => {
  if(operand === 0) {
    return {
      status: 400,
      message: 'divide by zero error'
    }
  }
}

module.exports = {
  validateDivision
}