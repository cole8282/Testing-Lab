let myFunctions = require('./functions.js')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('Cole')).toBe('Hello Cole.')
})

test("Addition Test", () => {
    expect(myFunctions.add(5, 9)).toBe(14)
})

//describe grouped tests
describe("Math functions tests", function() {

  test("Addition Test", () => {
    expect(myFunctions.add(5, 9)).toBe(14)
  })

  test("Multiply Test", function() {
    expect(myFunctions.multiply(5, 9)).toBe(45)
  })

  test("Divide Test", function() {
    expect(myFunctions.divide(10, 5)).toBe(2)
  })

  test("Subtract Test", function() {
    expect(myFunctions.subtract(10, 5)).toBe(5)
  })
})