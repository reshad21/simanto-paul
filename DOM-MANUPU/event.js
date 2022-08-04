let btn = document.getElementById('btn');

btn.addEventListener('click',function(e){
    let val = e; // aknae e akta object jar onek gula property ace
    val = this; //e ar ja kaj this aro thick same kaj.this current ja elemment niya kaj kori takei bojay
    val = e.target; 
    val = e.target.id;
    val = e.timeStamp;
    val = e.type;
    val = e.clientX;  // page ar koto pixel a click kora hoitace
    val = e.clientY;  // page ar koto pixel a click kora hoitace
    val = e.offsetX;  // aita elemnt ar x-axix Count korbe;
    val = e.offsetY;  // aita elemnt ar y-axix Count korbe;
    console.log(val);
    
});

// chnage background color a spacific element
let wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('mousemove',function(e){
    this.style.background = `#${e.offsetX}`; 
     console.log(e.target);
});


// now form related event
let frmitem = document.querySelector('#frmitem');
frmitem.addEventListener('focus',function(e){
    e.target.style.background="pink";
})

frmitem.addEventListener('keyup',function(e){
    console.log(this.value);
})



// this and e.target same kaji kore addEventListener ar modhay;
