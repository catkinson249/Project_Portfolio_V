import React, { Component } from 'react';


class Random extends Component {

    state = {
        recipes: [],
        userSearch: '',
    }

    componentWillMount() {
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ recipes: data.drinks }))
    }



    // for random button
    handleRandom = e => {
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ recipes: data.drinks }))
    }



    // render drink list and drink values
    render() {
        const recipeItems = this.state.recipes.map(recipe => (
            <div key={recipe.idDrink}>
                <img src={recipe.strDrinkThumb} alt={recipe.strDrink} height='150px' />
                <h2>{recipe.strDrink}</h2>
                <p>Ingredients: </p>
                <p>{recipe.strIngredient1}</p>
                <p>{recipe.strIngredient2}</p>
                <p>{recipe.strIngredient3}</p>
                <p>{recipe.strIngredient4}</p>
                <p>{recipe.strIngredient5}</p>
                <p>{recipe.strIngredient6}</p>
                <p>{recipe.strIngredient7}</p>
                <p>{recipe.strIngredient8}</p>
                <p>{recipe.strIngredient9}</p>
                <p>{recipe.strIngredient10}</p>
                <h3>{recipe.strInstructions}</h3>
            </div>
        ));

        return (
            <div className="container">
                <button onClick={this.handleRandom} className="btn">Browse Random</button>
                <div className="default-list">
                    <h1>Drink Recipes: </h1>
                    {recipeItems}
                </div>
            </div>
        );
    }
}

export default Random;





