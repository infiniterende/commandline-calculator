import Calculator from "../Calculator";

const calculator = new Calculator

test("add two numbers and returns result given input array of two numbers, add sign and equals sign", () => {
    let input = "23 + 23 ="
    let inputArray = input.split("")
    calculator.setInputHistory(inputArray)
    calculator.processInputArray()
    expect(calculator.getCurrentState()).toEqual(46)
})

