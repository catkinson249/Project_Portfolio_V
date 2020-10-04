import React from 'react'

const Recipe = props => {
    return (
        <div>
            <img src={props.strDrinkThumb} alt={props.strDrink} />
            <h2>{props.strDrink}</h2>
            <ul>{props.strIngredients} </ul>

        </div>
    )
}
export default Recipe