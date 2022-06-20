const validator = require('../validators/calculator-validator')
const calculator = require('../services/calculator')

const add = (req, res) => {
  const a = Number(req.query.a)
  const b = Number(req.query.b)
  const result = calculator.add(a, b)
  res.send(`result: ${result}`)
}

const devide = (req, res) => {
  const a = Number(req.query.a)
  const b = Number(req.query.b)

  const valError = validator.validateDivision(b)

  if(valError) {
    res.status(valError.status).send(valError.message)
    return
  }

  const result = calculator.divide(a, b)
  res.send(`result: ${result}`)
}

module.exports = {
  add,
  devide
}