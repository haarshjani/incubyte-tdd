const { execOnce } = require("next/dist/shared/lib/utils.js")
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

test('should return sum of any numbers passed as string with comma seperated', () => {

    expect(addNumbers("1,4,5,6")).toBe(16)
})

test('should consider new line between numbers as separator',() => {

    expect(addNumbers("1\n2,3")).toBe(6)
})

test('should handle the deliminator looks like this: "//[delimiter]\n[numbers…] ', () => {

    expect(addNumbers('//;\n1;2')).toBe(3)
})

test('should throw exception if there is negative number in the string', () => {
        expect(addNumbers("1,2,-3,-4")).toThrow("Negative numbers not allowed: -3,-4")

})

test('Numbers bigger than 1000 should be ignored ',() => {

    expect(addNumbers("2,1001")).toBe(2)
})