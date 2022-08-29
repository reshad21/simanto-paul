const numbers = [22, 34, 28, 17, 19, 11, 18, 15];

function selectedNumber(numbers) {
    let targetNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > 20) {
            targetNumber.push(element);
        }
    }
    return targetNumber;
}
console.log(selectedNumber(numbers));


// now we use filter method for reduce code
const selected = numbers.filter(num => num > 15);
console.log(selected);


// another examaple
const products = [
    { id: 1, name: "laptop", price: 45000 },
    { id: 2, name: "mobile", price: 25000 },
    { id: 3, name: "Tablet", price: 35700 },
    { id: 4, name: "Iphone", price: 105700 },
]

let choice = products.filter(item => item.price > 30000);
console.log(choice);

// relatime example: 
// 1. 20 ar uporer mark gula show koro.
// 2. jasob phone ar price 20000 ar upore sa sob phone gula dakhao 


const simpleChoice = numbers.find( x => x > 14);
console.log(simpleChoice);
// numbers array te onek gula element ace kintu sudhu matro prothom tai dakhno hoice karon find mehtod condition mille kabol matro 1st element tia dakahbe.

// realtime example:
// 1.amake jakono akta 2000tk damer phone dakhan.