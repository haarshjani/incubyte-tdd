

const addNumbers = (stringNumber) => {


    if(!stringNumber){
        return 0;
    }
    const nums = stringNumber.split(',').map((number) => parseInt(number))

    const sum = nums[0] + (nums[1] || 0)

    return sum
}

module.exports = {
    addNumbers
}