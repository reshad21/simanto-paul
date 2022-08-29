const numbers = [3, 6, 9, 12];
let division = numbers.map(num => num / 3);
let half = numbers.map(num => num / 2);
console.log(division);
console.log(half);


// now we see string case 
const frindsName = ['Tom hank', 'Tom bardy', 'Tom crus', 'Tom solaiman'];
let firstLatter = frindsName.map(x => x[0]);

let bigName = frindsName.map(x => x.length);
console.log(firstLatter);
console.log(bigName);

// array object data structure
const products = [
    { id: 1, name: "laptop", price: 45000 },
    { id: 2, name: "mobile", price: 25000 },
    { id: 3, name: "Tablet", price: 35700 },
    { id: 4, name: "Iphone", price: 105700 },
]
// console.log(products[0].name);

// let productname = products.map(item => console.log(item));
let productname = products.map(item => item.name);
console.log(productname);

// use of forEach 
products.forEach(item => console.log(item.price));
// discussion: foreach kono array return kore na. sa protita item niya kaj kore akta value show kore. 