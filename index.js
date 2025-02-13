

const addNumbers = (stringNumber) => {


    let deliminator = ","

    if(!stringNumber){
        return 0;
    }

      
    if(stringNumber.startsWith("//")){
        const numbers = stringNumber.split("\n")
        deliminator = numbers[0].slice(2)
        stringNumber = numbers.slice(1).join("\n") 
    }

    stringNumber = stringNumber.replace(deliminator, ",")
 

    // console.log(deliminator)
    
    const nums = stringNumber.split(/[\n,]/).map((number) => parseInt(number))

    const sum = nums.reduce((sum, num) => sum+ num,0)

    return sum
}


// addNumbers("1\n2,3");

module.exports = {
    addNumbers
}