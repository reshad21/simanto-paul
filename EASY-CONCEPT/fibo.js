// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
/*
    fibo[3] = fibo[2] + fibo[1];
    fibo[4] = fibo[3] + fibo[2];
    fibo[5] = fibo[4] + fibo[3];
    fibo[6] = fibo[5] + fibo[4];
    fibo[387] = fibo[386] + fibo[385];
    fibo[n] = fibo[n-1] + fibo[n-2];
    fibo[i] = fibo[i-1] + fibo[i-2];

    orthat fibo ar first 2i ta man age theke declare kore rakte hobe.
*/

const fibo =[0,1];

for (let i = 2; i <= 10; i++) {
    // const element = array[i];
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);