const loadData = (search) => {
    const Url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(Url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

// webpage a default kicu item show koranor jonnno ai kane function call kora hoice. nahole moruvumi lagbe //
// loadData('fish');

// by default sob item show korber jono empty string deya hoice //
loadData("");

const displayMeals = (meals) => {
    const mealcontainer = document.getElementById('meal-container');
    mealcontainer.innerHTML = "";
    meals.forEach(meal => {
        // destructuring object
        const { strMealThumb, strMeal, strInstructions, idMeal } = meal;

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${strMealThumb ? strMealThumb : "image not found"}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">${strInstructions.slice(0, 300)}....</p>
                </div>
                <button class="btn btn-warning" onclick="getdetails(${idMeal})">GET DETAILS</button>
            </div>
        `;
        mealcontainer.appendChild(div);

    })
}

// ========== searching food ========== //
const searchFood = () => {
    const inputfield = document.getElementById('input-value');
    const inputValue = inputfield.value;
    inputfield.value = "";
    loadData(inputValue);
    // akane loadData function tokoni call hobe jokhon ku kcu search korbe.
}


// =========== get food details =========== //
const getdetails = (mealid) => {
    window.scrollTo(0, 0);
    // console.log(mealid);
    const idmeal = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
    fetch(idmeal)
        .then(res => res.json())
        .then(data => displaySingleMeal(data.meals[0]))
}

const displaySingleMeal = (single) => {
    console.log(single);

    const { strMealThumb, strMeal } = single;

    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = "";
    console.log(detailsContainer);
    const div = document.createElement('card');
    div.innerHTML = `
        <img src="${strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    detailsContainer.appendChild(div);

}