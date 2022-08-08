let shoppingCart = [
    {name : "shirt", price: 1500, quentity: 2},
    {name : "pant", price: 1000, quentity: 3},
    {name : "belt", price: 500, quentity: 1}
]

function totalCost(shoppingCart){
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const element = shoppingCart[i];
        let shirtprice = element.price * element.quentity;
        let pantprice = element.price * element.quentity;
        let beltprice = element.price * element.quentity;
        let totalPrice = shirtprice + pantprice + beltprice;
        sum = sum + totalPrice;
    }
    return sum;
}
let allprice = totalCost(shoppingCart);
console.log(allprice);
