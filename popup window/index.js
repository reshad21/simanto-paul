let toggle = document.querySelector('#toggle');
let popup = document.querySelector('#popup');
let body = document.querySelector('#body');

toggle.addEventListener('click',function(){
    popup.classList.toggle('active');
    body.classList.toggle('active');
})