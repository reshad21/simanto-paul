function woodCalculator(table, chari, bed) {
    const tablewood = 13;
    const chairwood = 18;
    const bedwood = 34;

    let tabletotal = table * tablewood;
    let chairtotal = chari * chairwood;
    let bedtotal = bed * bedwood;

    let totalwood = tabletotal + chairtotal + bedtotal;
    return totalwood;

}
let quentity = woodCalculator(3, 1, 0);
console.log("total wood needed:", quentity + "cft");