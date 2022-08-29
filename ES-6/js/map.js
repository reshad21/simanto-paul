const numbers = [2, 1, 4, 6, 3];
// const newNumber = [];
// for (const number of numbers) {
//     let result = number * 2;
//     newNumber.push(result);
// }
// console.log(newNumber);

// 1st step
function square(numbers) {
    const newNumber = [];
    for (const number of numbers) {
        let result = multiple(number);
        newNumber.push(result);
    }
    return newNumber;
}

// 2nd step
function multipleOld(number) {
    return number * 2;
}

// map concept 
let multiple = number => number * 2;
let doubled = numbers.map(multiple);
let triple = numbers.map(x => x * 3);
let directArray = [1, 2, 3, 4, 5].map(x => x * 5);

// 2nd step result
// console.log(square(numbers));


// map concept result
console.log(doubled);
console.log(triple);
console.log(directArray);


// relatime example: kono office ar sobar baton eid ar somoy barano lagbe 50%.