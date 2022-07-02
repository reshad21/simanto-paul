
const movies = [
    {
        movieName   : "Kate The Untold Story",
        directorName: "Rayan Ronalds",
        movieRating : 5,
        image       : `img/img-1.jpeg`
    },
    {
        movieName   : "Valkairi",
        directorName: "Keano Rives",
        movieRating : 3.5,
        image       : `img/img-2.jpeg`
    },
    {
        movieName   : "Dune",
        directorName: "Author Daniel",
        movieRating : 4.5,
        image       : `img/img-3.jpeg`
    }
]

let poster     = document.querySelectorAll("#poster");
let movieNames = document.querySelectorAll("#movieName");
let authors    = document.querySelectorAll("#author");
let ratings    = document.querySelectorAll("#rating");

// let card       = document.querySelectorAll('.card');
// let carditem   = `
// <div class="card" style="width: 18rem">
//   <img
//     src="img/img-1.jpeg"
//     class="card-img-top"
//     alt="..."
//     id="poster"
//   />
//   <div class="card-body">
//     <h5 class="card-title" id="movieName">
//       Movie: Kate The Untold Story
//     </h5>
//     <p class="card-text" id="author">Directed By: Rayan Ronalds</p>
//     <div class="call-to-action d-flex gap-2">
//       <a href="#" class="btn btn-primary p-1">Movie Rating</a>
//       <a href="#" class="btn btn-success p-1" id="rating">5</a>
//     </div>
//   </div>
// </div>`
// console.log(carditem);

//console.log(movieNames.innerHtml);

for (let i = 0; i < movieNames.length; i++) {
    const element = movieNames[i];
    element.innerHTML= movies[i].movieName;
}

for (let i = 0; i < authors.length; i++) {
    const element = authors[i];
    element.innerHTML = movies[i].directorName;
}

for (let i = 0; i < ratings.length; i++) {
    const element = ratings[i];
    element.innerHTML = movies[i].movieRating;
    
}

for (let i = 0; i < poster.length; i++) {
    const element = poster[i];
    element.src = movies[i].image;
    
}

// let create = document.createElement('div');
// create.appendChild(document.createTextNode(``));
// document.getElementById('wrapper').appendChild(create);


