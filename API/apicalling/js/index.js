function getdata(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displaydata(data))
}
function displaydata(users){
    
    const useresContainer = document.getElementById('useres-container');
    for(const user of users){
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerHTML= user.name;
        useresContainer.appendChild(li);
    }
}