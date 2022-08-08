// number = [10,30,22,13,43];

let phones = [
    { name: "samsung", camera: "10mpx", ram: "8gb", price: 56000 },
    { name: "oneplus", camera: "22mpx", ram: "12gb", price: 76000 },
    { name: "vivo", camera: "15mpx", ram: "8gb", price: 46000 },
    { name: "apple", camera: "20mpx", ram: "12gb", price: 96000 },
    { name: "oppo", camera: "24mpx", ram: "12gb", price: 34000 },
    { name: "poco", camera: "8mpx", ram: "4gb", price: 14000 },
]
function chepPhone(phones) {
    let cheap = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const item = phones[i];

        if (item.price < cheap.price) {
            cheap = item;
        }
    }
    return cheap;

}

let findCheap = chepPhone(phones);
console.log(findCheap);