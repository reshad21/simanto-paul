const getquote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(quote=>{
        display(quote);
    })
}

function display(quote){
    document.getElementById('blockquotes').innerHTML = quote.quote
}