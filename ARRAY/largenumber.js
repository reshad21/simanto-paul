let number = [10,22, 44, 25, 40, 49];

var large = number[0];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if(large < element){
        large = element;
    }
    console.log(large);
    
}