const  { addNumbers } =  require("../index.js")


test('Should retrun 0 for empty string', () => {

    expect(addNumbers("")).toBe(0)
})

test('should retrun number only if single number in string',() => {

    expect(addNumbers("1")).toBe(1)
})

test('should return sum of two numbers', () => {

    expect(addNumbers("1,5")).toBe(6)
})