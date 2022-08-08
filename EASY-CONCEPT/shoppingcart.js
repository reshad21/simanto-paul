let shoppingCart = [
    {name : "shirt", price: 1500, quentity: 2},
    {name : "pant", price: 1000, quentity: 3},
    {name : "belt", price: 500, quentity: 1}
]

function totalCost(shoppingCart){
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const element = shoppingCart[i];
        let totalPrice = element.price * element.quentity;
        sum = sum + totalPrice;
    }
    return sum;
}
let allprice = totalCost(shoppingCart);
console.log(allprice);
