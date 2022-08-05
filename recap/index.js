

// find even and odd number by using function
// function checkoddeven(number) {
//     if (number % 2 == 0) {
//         return "odd";
//     }
//     else {
//         return "even";
//     }
// }
// let number = 11;
// let checking = checkoddeven(number);
// console.log(checking);

// --------- find leap year ------- //

function leapyear(year){
    let reminder = year % 4;
    if (reminder == 0) {
        return true;
    } 
    return false;
    // else ar poriborte ai line lakha hoice
}
let year = 2022
let result = leapyear(year);
console.log(result);
