

const addNumbers = (stringNumber) => {


    if(!stringNumber){
        return 0;
    }
    const nums = stringNumber.split(',').map((number) => parseInt(number))

    const sum = nums.reduce((sum, num) => sum+ num,0)

    return sum
}

module.exports = {
    addNumbers
}