const radndomusers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(users => {
            display(users.results);
        })
}
radndomusers();

const display = users => {
    console.log(users);
    const userContainer = document.getElementById('user-container');
    for (const user of users) {
        console.log(user);
        let userdiv = document.createElement('div');
        userdiv.classList.add('randomuser');
        userdiv.innerHTML =`
            <h3>Name :${user.name.title} ${user.name.first} ${user.name.last} </h3>
            <p>Email :${user.email}</p>
            <p>Address :${user.location.city}</p>
        `;
        userContainer.appendChild(userdiv);
    }
}