let input = document.querySelector('#input').value;
let search = document.querySelector('#search');
const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

search.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData();

})

function fetchData() {
    fetch(searchURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

}

function appendData(data) {
    var output = document.getElementById("results");
    for (let i = 0; i < data.drinks.length; i++) {
        let drink = {
            'image': data.drinks[i].strDrinkThumb,
            'name': data.drinks[i].strDrink,
            'category': data.drinks[i].strCategory,
            'ingredients': [
                data.drinks[i].strIngredient1,
                data.drinks[i].strIngredient2,
                data.drinks[i].strIngredient3,
                data.drinks[i].strIngredient4,
                data.drinks[i].strIngredient5,
                data.drinks[i].strIngredient6,
                data.drinks[i].strIngredient7,
                data.drinks[i].strIngredient8,
                data.drinks[i].strIngredient9,
                data.drinks[i].strIngredient10,
            ],
            "instructions": data.drinks[i].strInstructions
        }
        let img = document.createElement('img');
        img.src = `${drink.image}`;
        img.width = 100;
        img.height = 100;
        let li = document.createElement('li');
        li.innerHTML = `Name: ${drink.name} <br>
        Category: ${drink.category} <br>
        Ingredients: ${drink.ingredients} <br>
        Instructions: ${drink.instructions} `;
        output.appendChild(img);
        output.appendChild(li);
    }

}
