
// akane sum variable ta loop ar barie delcare kora hoice karon loop ar modhay declare korle sum ar maner kono change hobe na

// aber return korber somoy sobsomoy loop ar baire korte hobe


function arraySum(number) {
    var sum = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i]
        sum = sum + element;
    }
    return sum;
}

function getOddNumberofArray(number) {
    let oddnumber = [];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element % 2 == 1) {
            oddnumber.push(element);
        }
    }
    return oddnumber;
}



// const marks = [10, 20, 30, 40, 50, 100];
const number = [7, 3, 2, 11, 16, 19, 22, 1]
let oddnumber = getOddNumberofArray(number);
console.log(oddnumber);
let result = arraySum(oddnumber);
console.log(result);