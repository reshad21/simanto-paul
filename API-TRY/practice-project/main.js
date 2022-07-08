fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    let users = data;
    for (let i = 0; i < users.length; i++) {
      const item = users[i];
      let list = document.createElement("p");
      list.innerHTML = `Name : ${item.name} <button onclick = "getinfo(${item.id})">more details- ${item.id}</button>`;
      const wrapper = document.querySelector("#wrapper");
      wrapper.appendChild(list);
    }
  });

function getinfo(userid) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".single-userdata").innerHTML = `
      <h4>username = ${data.username}</h4>
      <h4>phone = ${data.phone}</h4>
      <h4>website = ${data.website}</h4>
      `;
      // console.log(data);
    });
}