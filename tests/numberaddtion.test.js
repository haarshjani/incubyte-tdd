const  { addNumbers } =  require("../index.js")


test('Should retrun 0 for empty string', () => {

    expect(addNumbers("")).toBe(0)
})