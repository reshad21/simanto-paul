let number = [13, 15, 18, 20, 14, 17, 21];
let partial = number.slice(2, 5);
let newnumber = number.splice(2, 3, 11, 22, 33);
console.log(newnumber);
console.log(number);
