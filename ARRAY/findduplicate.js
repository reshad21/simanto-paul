const names = ['habul' ,'kabul','babul','ebul','cabul','babul','ebul','cabul','kabul','babul','ibul'];


function uniqueNamefind(){
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.includes(element) === false) {
            unique.push(element);
        }
    }
    return unique;
}
let getuniquename = uniqueNamefind(names);
console.log(getuniquename);


