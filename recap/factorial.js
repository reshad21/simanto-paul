


function fatorial(number) {
    var sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = sum * i;
    }
    return sum;
}
let digit = 5;
let result = fatorial(digit);
console.log(result);


