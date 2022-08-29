function postget(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
postget();

// document.getElementById('hi').innerHTML
function displayPost(userposts){
    const headerSection = document.getElementById('header-section');
    for(const user of userposts){
        const div = document.createElement('div');
        div.classList.add('postwrapper')
        div.innerHTML=`
            <h5>Id:${user.id}</h5>
            <p>Title:${user.title}</p>
            <p>Body:${user.body}</p>
            <button>Detail</button>
        `
        headerSection.appendChild(div);
    }
}