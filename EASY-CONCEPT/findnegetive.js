const number = [10, 20, 30, 40, 50, -60, 70, 80, 90];

let positivenumber = []
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element < 0) {
        break;
    }
    else if (element > 0) {
        positivenumber.push(element);
    }
    console.log(positivenumber);
}