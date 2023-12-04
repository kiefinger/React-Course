import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";
import './MealItem.css'
import CartContext from "../../store/cartContext";

function MealItem(props) {
    const price = `$${props.meal.price.toFixed(2)}`;

    return ( <li key={props.meal.id} className="meal">
        <div >
            <h3>{props.meal.name}</h3>
            <div className="meal-description"> {props.meal.description}</div>
            <div className="meal-price">{price}</div>
        </div>
        <div>
            <MealItemForm meal={props.meal} />
        </div>
    </li>)

}

export default MealItem;