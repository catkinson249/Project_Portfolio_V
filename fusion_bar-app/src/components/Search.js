// WORKS

import React, { Component } from 'react';


class Search extends Component {
    // variables
    state = {
        searchValue: "",
        drinks: [],
    }

    // handlers
    handleOnChange = e => {
        this.setState({ searchValue: e.target.value })
    }

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue)
    }

    // functions
    makeApiCall = searchInput => {
        let searchUrl = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`

        fetch(searchUrl)
            .then(response => {
                return response.json()
            })
            .then(jsonData => {
                this.setState({ drinks: jsonData.drinks })
            })
    }

    // interface 
    render() {
        return (
            <div className="container">
                <h2>Search for drink recipes by name</h2>

                <input className="input" name="text"
                    type="text"
                    placeholder="Search"
                    onChange={e => this.handleOnChange(e)}
                    value={this.state.searchValue} />

                <button onClick={this.handleSearch} className="btn">Search</button>
                {this.state.drinks ? (
                    <div>
                        {this.state.drinks.map((drink, i) => (
                            <div key={i}>
                                <h2>{drink.strDrink}</h2>
                                <img src={drink.strDrinkThumb} alt="drink-thumbnail" width="100px" />
                                <p>{drink.strInstructions}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                        <p>Try searching for a drink</p>
                    )}
            </div>
        );
    }
}
export default Search;
