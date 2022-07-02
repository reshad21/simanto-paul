let ollist = document.createElement('ol');

const personname = ['reshad','sharmin','jhon','dow'];
personname.forEach(element => {
    let lilst = document.createElement('li');
    lilst.appendChild(document.createTextNode(element));
    ollist.appendChild(lilst);
    console.log(element);
});

document.querySelector('.container').appendChild(ollist);