// Define UI Element
let form       = document.querySelector('#task_form');
let newtask    = document.querySelector('#new_task');
let taskfilter = document.querySelector('#task_filter');
let clearBtn   = document.querySelector('#clear_task_btn');
let tasks      = document.querySelector('#tasks');

// Define event listener
form.addEventListener('submit', addtask);
tasks.addEventListener('click',remove);
clearBtn.addEventListener('click',clearall);
taskfilter.addEventListener('keyup',filtertask);

// Define function
function addtask(e){
    e.preventDefault();
    if(newtask.value === ""){
        alert("Please Enter your task");
    }else{

        let list = document.createElement('li');
        list.appendChild(document.createTextNode(newtask.value));
        let anchor = document.createElement('a');
        anchor.setAttribute('href','#');
        anchor.appendChild(document.createTextNode(` X`));
        anchor.classList.add('cross_icon_design');
        list.appendChild(anchor);
        tasks.appendChild(list);
        newtask.value = "";
        // console.log(list);
    }
}

// Remove single task
function remove(e){
    e.preventDefault();
    if (e.target.hasAttribute('href')) {
        if(confirm("are you sure")){
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
}


// Clear all the task
function clearall(e){
    e.preventDefault();
    tasks.innerHTML = "";
}


// filter all the task
function filtertask(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text)!= -1){
            // item.classList.add('show');
            console.log(item);
        }else{
            // item.classList.add('hide');
            console.log(item);
        }
        
    
    });
    // console.log(text);

}
