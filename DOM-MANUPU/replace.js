let newitem = document.createElement('h1');
newitem.appendChild(document.createTextNode("H1 is the new heading"));
newitem.className = "heading-item";

let olditem = document.querySelector('h3');
// now we can replace h3 in two ways //
// system one:
// let parentelement = document.querySelector('.container');
// parentelement.replaceChild(newitem,olditem);

// system two:
olditem.parentElement.replaceChild(newitem,olditem);

//console.log(newitem);
console.log(olditem);