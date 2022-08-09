var shoppingcart = {
    phone: 1,
    book:4,
    pen: 2,
    mouse: 1,
    pencil: 3

}

// we can get value form an object in three ways //

console.log(shoppingcart.book);
console.log(shoppingcart["mouse"]);

var propertyName = "pencil";
console.log(shoppingcart[propertyName]);


// we can set value from an object in also three ways //
console.log(shoppingcart);

shoppingcart.pencil = 9;
console.log(shoppingcart);

shoppingcart['pencil'] = 18;
console.log(shoppingcart);

var propsname = "pencil";
shoppingcart[propsname] = 36;
console.log(shoppingcart);

// akn jodi amra object ar property name na jani tahole javabe property name ber korbo
var propertynames = Object.keys(shoppingcart);
var propertyvalues = Object.values(shoppingcart);
console.log(propertynames);

// output: [ 'phone', 'book', 'pen', 'mouse', 'pencil' ];
// output: [ 1, 4, 2, 1, 3 ];

for (let i = 0; i < propertynames.length; i++) {
    const propertyname = propertynames[i];
    // console.log(propertyname);
    // console.log(shoppingcart[propertyname]);
    console.log(propertyname, shoppingcart[propertyname]);
    // dot notation use kora jabe na tahole undefined asbe
}
// for (let j = 0; j < propertyvalues.length; j++) {
//     const propertyvalue = propertyvalues[j];
//     console.log(propertyvalue);
// }

// now we use for in loop for reduce code //
for(key in shoppingcart){
    console.log(key, shoppingcart[key]);
    // again dot notation use kora jabe na tahole undefine asbe
}
