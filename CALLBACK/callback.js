// function display(data){
//     console.log(data);
// }

// function sum(x,y){
//     let result = x+y;
//     return result;
// }


// let result = sum(10,30);
// display(result);


// function display(data){
//     console.log(data);
// }

function sum(a,b,func){
    let result = a+b;
    func(result);
    return result;
}

//let result = sum(10,20);
sum(10,11,function(data){
    console.log(data);
});

sum(22,11,(data)=>{console.log(data)});
// console.log(result);


// akane akta system kore akta function ka pass kore deya hoice jate satake nijer moto use korte pare sum function ta.

