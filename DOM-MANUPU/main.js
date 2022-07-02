let val;
val = this;
val = window;
val = window.document;
val = document;
val = document.all;
val = document.all[0];
val = document.all[1];
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.forms[0];
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;
val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

let links = document.links; //html collection hobe tobe aderka niya kaj kora jabe na
let linkconvert = Array.from(links); //html collection gulake array te convert korlam jate foreach use korajay

linkconvert.forEach(link => {
    console.log(link);
});



//console.log(links);


let listitems = document.querySelectorAll('li:nth-child(odd)');
listitems.forEach(element => {
    console.log(element);
});