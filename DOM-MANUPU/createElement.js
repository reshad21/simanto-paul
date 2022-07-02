let olItem = document.createElement('li');
olItem.className = 'a new another';
olItem.id = "newelement";
olItem.setAttribute('title','list-tems');
olItem.appendChild(document.createTextNode('javascript'));

document.querySelector('ol').appendChild(olItem);
//console.log(olItem);

let liItem = document.createElement('li');
let link = document.createElement('a');
link.appendChild(document.createTextNode('instagram'));
link.setAttribute('href',"https://www.instagram.com/");
liItem.appendChild(link);

document.querySelector('ul').appendChild(liItem);


//console.log(liItem);
//console.log(link);