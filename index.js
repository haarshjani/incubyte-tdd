

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


    const deliminators = getAllStringsBetween(deliminator,"[","]")

  
    deliminators.forEach((deliminator) => stringNumber = stringNumber.replaceAll(deliminator, ","))
    

    // console.log({stringNumber})
    
    const nums = stringNumber.split(/[\n,]/).map((number) => parseInt(number))

    const negativeNums = nums.filter((num)=> num < 0)

    // console.log(negativeNums)
    if(negativeNums.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNums.join(',')}`)
    }
    

    const sum = nums.reduce((sum, num) => {
        if(num >100){
            return sum 
        }
        return sum+ num
    },0)

    return sum
}

function getAllStringsBetween(s, startChar, endChar) {
    const results = [];
    let startIndex = s.indexOf(startChar);
    
    while (startIndex !== -1) {
        const endIndex = s.indexOf(endChar, startIndex + 1);
        
        if (endIndex === -1) {
            break; // No matching end character found
        }
        
        // Extract the substring between the two characters
        results.push(s.substring(startIndex + 1, endIndex));
        
        // Move to the next occurrence of the start character
        startIndex = s.indexOf(startChar, endIndex + 1);
    }
    
    return results; // Return an array of results
}

// addNumbers("//[*][%]\n1*2%3")

module.exports = {
    addNumbers
}