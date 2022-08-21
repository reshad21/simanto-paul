const products = [
    {id: 1, name: "xiomi phone", price: 110000},
    {id: 2, name: "iphone", price: 14000},
    {id: 3, name: "jefno phone", price: 17000},
    {id: 4, name: "note book pro", price: 33000},
    {id: 5, name: "dell taptop", price: 20000},
    {id: 6, name: "miami Phone", price: 180000},
    {id: 7, name: "Walton PHONE", price: 210000},
]

// let propertyname = Object.keys(products);
// let propertyValue = Object.values(products);

// let nameofproducts = [];
// for (let i = 0; i < products.length; i++) {
//     const element = products[i];
//     let elementName = element.nameofproducts;
//     nameofproducts.push(elementName);
// }
// console.log(nameofproducts);

// let productname = [];
// for(const product of products){
//     console.log(product.name);
//     productname.push(product.name);
// }
// console.log(productname);


function searchProduct(products,serach){
    let matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(serach.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

let searchitem = searchProduct(products,"phone");
console.log(searchitem);

for (let i = 5; i <= 50; i++) {
    console.log(i);
    
}