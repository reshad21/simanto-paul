let submit = document.querySelector("#submit");
let usernumber = document.querySelector('#user-number');
submit.addEventListener('click',function(e){
  e.preventDefault();
  let count = parseInt(usernumber.value);

  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((data) => {
      let users = data.slice(0,count);
      const wrapper = document.querySelector("#wrapper");
      wrapper.innerHTML="";
      for (let i = 0; i < users.length; i++) {
        const item = users[i];
        let list = document.createElement("p");
        list.innerHTML = `Name : ${item.name} <button onclick = "getinfo(${item.id})">more details- ${item.id}</button>`;
        wrapper.appendChild(list);
      }
    });
    
  usernumber.value="";
})


function getinfo(userid) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".single-userdata").innerHTML = `
      <h4>username = ${data.username}</h4>
      <h4>phone = ${data.phone}</h4>
      <h4>website = ${data.website}</h4>
      `;
    });
}
